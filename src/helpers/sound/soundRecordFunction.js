import Worker from './recorderWorker.js'

let Recorder = function(source, cfg){
    let config = cfg || {};
    let bufferLen = config.bufferLen || 4096;
    this.context = source.context;
    if(!this.context.createScriptProcessor){
        this.node = this.context.createJavaScriptNode(bufferLen, 2, 2);
    } else {
        this.node = this.context.createScriptProcessor(bufferLen, 2, 2);
    }

    let worker = new Worker()
    worker.setPostMessage({
        command: 'init',
        config: {
            sampleRate: this.context.sampleRate
        }
    });
    let recording = false,
        currCallback;

    this.node.onaudioprocess = function(e){
        if (!recording) return;
        worker.setPostMessage({
            command: 'record',
            buffer: [
                e.inputBuffer.getChannelData(0),
                e.inputBuffer.getChannelData(1)
            ]
        });
    }

    this.configure = function(cfg){
        for (let prop in cfg){
            if (cfg.hasOwnProperty(prop)){
                config[prop] = cfg[prop];
            }
        }
    }

    this.record = function(){
        recording = true;
    }

    this.stop = function(){
        recording = false;
    }

    this.clear = function(){
        worker.setPostMessage({ command: 'clear' });
    }

    this.getBuffers = function(cb) {
        currCallback = cb || config.callback;
        worker.setPostMessage({ command: 'getBuffers' })
    }

    this.exportWAV = function(cb, type){
        currCallback = cb || config.callback;
        type = type || config.type || 'audio/wav';
        if (!currCallback) throw new Error('Callback not set');
        worker.setPostMessage({
            command: 'exportWAV',
            type: type
        });
    }

    this.exportMonoWAV = function(cb, type){
        currCallback = cb || config.callback;
        type = type || config.type || 'audio/wav';
        if (!currCallback) throw new Error('Callback not set');
        worker.setPostMessage({
            command: 'exportMonoWAV',
            type: type
        });
    }

    worker.onmessage = function(e){
        let blob = e.data;
        currCallback(blob);
    }

    source.connect(this.node);
    this.node.connect(this.context.destination);   // if the script node is not connected to an output the "onaudioprocess" event is not triggered in chrome.
};

Recorder.setupDownload = function(blob, filename){
    let url = (window.URL || window.webkitURL).createObjectURL(blob);
    let link = document.getElementById("save");
    link.href = url;
    link.download = filename || 'output.wav';
}

export { Recorder }
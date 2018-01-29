import dialogPolyfill from 'dialog-polyfill/dialog-polyfill';

export function showUpLoadingDialog() {
    const dialog = document.querySelector('#uploading-dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
}

export function hideUpLoadingDialog() {
    const dialog = document.querySelector('#uploading-dialog');
    if (dialog.showModal) {
        dialog.close();
    }
}

export function showEnableMicrophoneDialog() {
    const dialog = document.querySelector('#enable-microphone-dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
}

export function hideEnableMicrophoneDialog() {
    const dialog = document.querySelector('#enable-microphone-dialog');
    if (dialog.showModal) {
        dialog.close();
    }
}

export function showLoadingDialog() {
    const dialog = document.querySelector('#loading-dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
}

export function hideLoadingDialog() {
    const dialog = document.querySelector('#loading-dialog');
    if (dialog.showModal) {
        dialog.close();
    }
}

export function showExamComfirmSubmitResultDialog() {
    const dialog = document.querySelector('#exam-submit-answers-dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
}

export function hideExamComfirmSubmitResultDialog() {
    const dialog = document.querySelector('#exam-submit-answers-dialog');
    if (dialog.showModal) {
        dialog.close();
    }
}

export function showExamMarkedQuestionsDialog() {
    const dialog = document.querySelector('#exam-marked-questions-dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
}

export function hideExamMarkedQuestionsDialog() {
    const dialog = document.querySelector('#exam-marked-questions-dialog');
    if (dialog.showModal) {
        dialog.close();
    }
}

export function showLoginDialog() {
    const dialog = document.querySelector('#login-dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    dialog.showModal();
}

export function hideLoginDialog() {
    const dialog = document.querySelector('#login-dialog');
    if (dialog.showModal) {
        dialog.close();
    }
}

export function showGlobalDialog(updateGlobalDialogText,dialog_content) {
    updateGlobalDialogText(dialog_content);
    const dialog = document.querySelector('#global-dialog')
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog)
    }
    dialog.showModal()
}

export function hideGlobalDialog() {
    const dialog = document.querySelector('#global-dialog')
    if (dialog.showModal) {
        dialog.close()
    }
}

export function showGlobalConfirmDialog(updateGlobalConfirmDialogText, dialog_confirm_content) {
    updateGlobalConfirmDialogText(dialog_confirm_content);
    const dialog = document.querySelector('#confirm-dialog')
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog)
    }
    dialog.showModal()
}

export function hideGlobalConfirmDialog() {
    const dialog = document.querySelector('#confirm-dialog')
    if (dialog.showModal) {
        dialog.close()
    }
}

export function showConfirmSubmitExerciseDialog() {
    const dialog = document.querySelector('#confirm-submit-exercise-dialog')
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog)
    }
    dialog.showModal()
}

export function hideConfirmSubmitExerciseDialog() {
    const dialog = document.querySelector('#confirm-submit-exercise-dialog')
    if (dialog.showModal) {
        dialog.close()
    }
}

export function showExamDescriptionDialog() {
    const dialog = document.querySelector('#question-instruction-modal');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog)
    }
    dialog.showModal()
}

export function hideExamDescriptionDialog() {
    const dialog = document.querySelector('#question-instruction-modal');
    if (dialog.showModal) {
        dialog.close()
    }
}

export function showSoundRecordDialog() {
    const dialog = document.querySelector('#record-sound-dialog');
    if (!dialog.showModal) {
        dialogPolyfill.registerDialog(dialog)
    }
    dialog.showModal()
}

export function hideSoundRecordDialog() {
    const dialog = document.querySelector('#record-sound-dialog');
    if (dialog.showModal) {
        dialog.close()
    }
}
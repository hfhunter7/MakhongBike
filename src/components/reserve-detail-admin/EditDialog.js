import React, { Component } from 'react';
import Button from 'material-ui/Button'
import { connect } from 'react-redux';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';

import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: '3%',
        marginLeft: '1%'
    },
    formControls: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class EditDialog extends Component {
    constructor( props ) {
        super(props)
        this.state = {
            adult: props.adult || '',
        };
    }


    handleRequestClose = () => {
        this.setState({
            adult: '',
        });
        this.props.handleRequestClose();
    };

    handleSave = () => {
        let data = {
            adult: this.state.adult
        }
        this.props.handleSaveData(data);
        this.props.handleRequestClose();
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleRequestClose}>
                    <DialogTitle>{this.props.headerText}</DialogTitle>
                    <DialogContent>
                        <form className={classes.container} autoComplete="off">
                            <FormControl className={classes.formControls}>
                                <InputLabel htmlFor="age-simple">ผู้ใหญ่</InputLabel>
                                <Select
                                    value={this.state.adult}
                                    onChange={this.handleChange('adult')}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </FormControl>
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleRequestClose} color="default">
                            ยกเลิก
                        </Button>
                        <Button raised onClick={this.handleSave}
                                color="primary">
                            แก้ไข
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    return {
        user: state.user,
    }
}

EditDialog.defaultProps = {};

export default connect(mapStateToProps, null)(withStyles(styles)(EditDialog))
import React , { Component }from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import keycode from 'keycode';
import Table, {
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TablePagination,
	TableRow,
	TableSortLabel,
} from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Tooltip from 'material-ui/Tooltip';


let counter = 0;

function createData(name, calories, fat, carbs, protein) {
	counter += 1;
	return { id: counter, name, calories, fat, carbs, protein };
}

const columnData = [
	{ id: 'name', numeric: false, disablePadding: true, label: 'Item name' },
	{ id: 'carbs', numeric: true, disablePadding: true, label: 'Type' },
	{ id: 'protein', numeric: true, disablePadding: true, label: 'Total sold' },
];

class BestSellingItem extends Component {
	static propTypes = {
		numSelected: PropTypes.number.isRequired,
		onRequestSort: PropTypes.func.isRequired,
		onSelectAllClick: PropTypes.func.isRequired,
		order: PropTypes.string.isRequired,
		orderBy: PropTypes.string.isRequired,
		rowCount: PropTypes.number.isRequired,
	};

	createSortHandler = property => event => {
		this.props.onRequestSort(event, property);
	};

	render() {
		const { order, orderBy } = this.props;
		return (
			<TableHead>
				<TableRow>

					{columnData.map(column => {
						return (
							<TableCell
								key={column.id}
								numeric={column.numeric}
								sortDirection={orderBy === column.id ? order : false}
							>
								<Tooltip
									title="Sort"
									placement={column.numeric ? 'bottom-end' : 'bottom-start'}
									enterDelay={300}
								>
									<TableSortLabel

									>
										{column.label}
									</TableSortLabel>
								</Tooltip>
							</TableCell>
						);
					}, this)}
				</TableRow>
			</TableHead>
		);
	}
}

const toolbarStyles = theme => ({
	root: {
		paddingRight: 2,
	},
	highlight:
		theme.palette.type === 'light'
			? {
				color: theme.palette.secondary.A700,
				backgroundColor: theme.palette.secondary.A100,
			}
			: {
				color: theme.palette.secondary.A100,
				backgroundColor: theme.palette.secondary.A700,
			},
	spacer: {
		flex: '1 1 100%',
	},
	actions: {
		color: theme.palette.text.secondary,
	},
	title: {
		flex: '0 0 auto',
	},
});

const TableRespon = styled(Table)`
     @media (max-width: 767px) {
		max-width: 100% !important;
	}
 `;
const TableCellRespon = styled(TableCell)`
     @media (max-width: 767px) {
	}
 `;

let EnhancedTableToolbar = props => {
	const { numSelected, classes } = props;

	return (
		<Toolbar
			className={classNames(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			<div className={classes.title}>
				{numSelected > 0 ? (
					<Typography type="subheading">{numSelected} selected</Typography>
				) : (
					<Typography type="title">Best selling items</Typography>
				)}
			</div>
			<div className={classes.spacer}/>
		</Toolbar>
	);
};
BestSellingItem.propTypes = {
	classes: PropTypes.object.isRequired,
	numSelected: PropTypes.number.isRequired,
};

BestSellingItem = withStyles(toolbarStyles)(BestSellingItem);
const styles = theme => ({
	root: {
		boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.2)'
	},
	table: {
		// minWidth: 800,
	},
	tableWrapper: {
		overflowX: 'auto',
	}
});

class EnhancedTable extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			order: 'asc',
			orderBy: 'calories',
			selected: [],
			data: [
				createData('Cupcake', 305, 3.7, 67, 4.3),
				createData('Donut', 452, 25.0, 51, 4.9),
				createData('Eclair', 262, 16.0, 24, 6.0),
				createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
				createData('Gingerbread', 356, 16.0, 49, 3.9),
				createData('Honeycomb', 408, 3.2, 87, 6.5),
				createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
				createData('Jelly Bean', 375, 0.0, 94, 0.0),
				createData('KitKat', 518, 26.0, 65, 7.0),
				createData('Lollipop', 392, 0.2, 98, 0.0),
				createData('Marshmallow', 318, 0, 81, 2.0),
				createData('Nougat', 360, 19.0, 9, 37.0),
				createData('Oreo', 437, 18.0, 63, 4.0),
			].sort((a, b) => (a.calories < b.calories ? -1 : 1)),
			page: 0,
			rowsPerPage: 5,
		};
	}

	handleRequestSort = (event, property) => {
		const orderBy = property;
		let order = 'desc';

		if (this.state.orderBy === property && this.state.order === 'desc') {
			order = 'asc';
		}

		const data =
			order === 'desc'
				? this.state.data.sort((a, b) => (b[ orderBy ] < a[ orderBy ] ? -1 : 1))
				: this.state.data.sort((a, b) => (a[ orderBy ] < b[ orderBy ] ? -1 : 1));

		this.setState({ data, order, orderBy });
	};

	handleSelectAllClick = (event, checked) => {
		if (checked) {
			this.setState({ selected: this.state.data.map(n => n.id) });
			return;
		}
		this.setState({ selected: [] });
	};

	handleKeyDown = (event, id) => {
		if (keycode(event) === 'space') {
			this.handleClick(event, id);
		}
	};

	handleClick = (event, id) => {
		const { selected } = this.state;
		const selectedIndex = selected.indexOf(id);
		let newSelected = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, id);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}

		this.setState({ selected: newSelected });
	};

	handleChangePage = (event, page) => {
		this.setState({ page });
	};

	handleChangeRowsPerPage = event => {
		this.setState({ rowsPerPage: event.target.value });
	};

	isSelected = id => this.state.selected.indexOf(id) !== -1;

	render() {
		const { classes } = this.props;
		const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
		const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

		return (
			<div className="aaa">
				<Paper className={classes.root}>
					<EnhancedTableToolbar numSelected={selected.length} {...this.props} />
					<div className={classes.tableWrapper}>
						<TableRespon className={classes.table}>
							<BestSellingItem
								numSelected={selected.length}
								order={order}
								orderBy={orderBy}
								onSelectAllClick={this.handleSelectAllClick}
								onRequestSort={this.handleRequestSort}
								rowCount={data.length}
							/>
							<TableBody>
								{data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
									const isSelected = this.isSelected(n.id);
									return (
										<TableRow
											hover
											onClick={event => this.handleClick(event, n.id)}
											onKeyDown={event => this.handleKeyDown(event, n.id)}
											role="checkbox"
											aria-checked={isSelected}
											tabIndex={-1}
											key={n.id}
											selected={isSelected}
										>
											<TableCellRespon>{n.name}</TableCellRespon>
											<TableCellRespon numeric>{n.carbs}</TableCellRespon>
											<TableCellRespon numeric>{n.protein}</TableCellRespon>
										</TableRow>
									);
								})}
								{emptyRows > 0 && (
									<TableRow style={{ height: 49 * emptyRows }}>
										<TableCell colSpan={6}/>
									</TableRow>
								)}
							</TableBody>
							<TableFooter>
								<TableRow>
									<Pagination
										count={data.length}
										rowsPerPage={rowsPerPage}
										page={page}
										backIconButtonProps={{
											'aria-label': 'Previous Page',
										}}
										nextIconButtonProps={{
											'aria-label': 'Next Page',
										}}
										onChangePage={this.handleChangePage}
										onChangeRowsPerPage={this.handleChangeRowsPerPage}
									/>
								</TableRow>
							</TableFooter>
						</TableRespon>
					</div>
				</Paper>
			</div>
		);
	}
}

const Pagination = styled(TablePagination)`
  @media (max-width: 767px) {
    padding: 4px 56px 4px 24px !important;
  }
`;
EnhancedTable.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
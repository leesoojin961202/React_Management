import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCeil from '@material-ui/core/TableCell';
import CustomerDelete from './CustomerDelete';

class Customer extends React.Component {
    render() {
        return (
            <TableRow>
                <TableCeil>{this.props.id}</TableCeil>
                <TableCeil><img src={this.props.image} alt="profile"/></TableCeil>
                <TableCeil>{this.props.name}</TableCeil>
                <TableCeil>{this.props.birthday}</TableCeil>
                <TableCeil>{this.props.gender}</TableCeil>
                <TableCeil>{this.props.job}</TableCeil>
                <TableCeil>
                    <CustomerDelete 
                        stateRefresh={this.props.stateRefresh}
                        id={this.props.id} />
                </TableCeil>
            </TableRow>
        ) 
    }
}

export default Customer;
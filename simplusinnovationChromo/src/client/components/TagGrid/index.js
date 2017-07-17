
import React ,{Component} from 'react'
import { Link } from 'react-router'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class TagGrid extends Component{
  render() {
    return (
      <div className="row">
      <div className="col-sm-8 col-sm-offset-2 m-t-md">
       <Link to="/">Back to Chrono Meter</Link>
      </div>
        <div className="col-sm-8 col-sm-offset-2 m-t-sm">
          <BootstrapTable data={this.props.tags} table hover>
            <TableHeaderColumn isKey dataField='id'>Tag ID</TableHeaderColumn>
            <TableHeaderColumn dataField='tagName'>Tag Name</TableHeaderColumn>
            <TableHeaderColumn dataField='startTS'>Start Time</TableHeaderColumn>
            <TableHeaderColumn dataField='diff'>Stop Time</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>
    )
  }
}

export default TagGrid

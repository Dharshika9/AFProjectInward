import React, { Component } from 'react';
import './vendor/bootstrap/css/bootstrap.min.css';
import './vendor/metisMenu/metisMenu.min.css';
import './vendor/font-awesome/css/font-awesome.min.css';
import './dist/css/sb-admin-2.css';


const TestRequest = function(){
    return(
        <div id="wrapper">

            <nav class="navbar navbar-default navbar-static-top" role="navigation" style={{'margin-bottom': '0'}}>
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="index.html">Digital Pluz</a>
                </div>

                <ul class="nav navbar-top-links navbar-right">
                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                            <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-user">
                            <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                            </li>
                            <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                            </li>
                            <li class="divider"></li>
                            <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div class="navbar-default sidebar" role="navigation">
                    <div class="sidebar-nav navbar-collapse">
                        <ul class="nav" id="side-menu">
                            <li class="sidebar-search">
                                <div class="input-group custom-search-form">
                                    <input type="text" class="form-control" placeholder="Search..."/>
                                    <span class="input-group-btn">
        <button class="btn btn-default" type="button">
        <i class="fa fa-search"></i>
        </button>
        </span>
                                </div>
                            </li>
                            <li>
                                <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> Lab Orders</a>
                            </li>
                            <li>
                                <a href="index.html"><i class="fa fa-dashboard fa-fw"></i> New Lab Test</a>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-bar-chart-o fa-fw"></i> Option Manager<span class="fa arrow"></span></a>
                                <ul class="nav nav-second-level">
                                    <li>
                                        <a href="flot.html">Flot Charts</a>
                                    </li>
                                    <li>
                                        <a href="morris.html">Morris.js Charts</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>

            <div id="page-wrapper">
                <div class="row">
                    <div className="col-lg-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                DataTables Advanced Tables
                            </div>


                            <div className="panel-body">

                                <table width="100%" className="table table-striped table-bordered table-hover"
                                       id="dataTables-example">
                                    <thead>
                                    <tr>
                                        <th>Sample Center Type ID</th>
                                        <th>Sample Center Type Name</th>
                                        <th></th>

                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr className="odd gradeX">
                                        <td>Trident</td>
                                        <td>Internet Explorer 4.0</td>
                                        <td>
                                            <button id="1" value class="btn btn-primary" title="Edit" data-toggle="tooltip" data-placement="right  ">Edit</button>
                                        </td>

                                    </tr>



                                    </tbody>
                                </table>




                            </div>
                            <div className="add_button pull-right">
                                <a href="#AddType" target="_blank" id="NewtypeBtn" className="updtCat"
                                   data-toggle="modal">
                                    <button id="Btn01" value className="btn btn-primary" title="Add" data-toggle="tooltip" data-placement="right  " data-original-title="Edit">Add New Sample Center Type</button>

                                </a>

                            </div>

                        </div>

                    </div>


                </div>
            </div>


        </div>



    )
}

export default TestRequest;

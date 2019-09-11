<template>
    <div class="container">
        <table id="sortingtable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Date of Birth</th>
                    <th>Last login date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Jan</td>
                    <td>Sittard, NL</td>
                    <td>31-08-1980</td>
                    <td>Saturday, August 17 2019</td>
                </tr>
                <tr>
                    <td>Peer</td>
                    <td>Berlin, DE</td>
                    <td>05-09-1980</td>
                    <td>Tuesday, September 10 2019</td>
                </tr>
                <tr>
                    <td>Paddy</td>
                    <td>Liege, BE</td>
                    <td>25-09-1980</td>
                    <td>Wednesday, August 21 2019</td>
                </tr>
                <tr>
                    <td>Lim</td>
                    <td>Tokyo, JP</td>
                    <td>03-08-1980</td>
                    <td>Friday, September 6 2019</td>
                </tr>
                <tr>
                    <td>Yong</td>
                    <td>Shanghai, CH</td>
                    <td>01-09-1980</td>
                    <td>Monday, September 9 2019</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    // Import jQuery into the $ variable, datatables.net needs it this way
    import $ from 'jquery'
    import 'datatables.net'

    // Import moment and datatables.net plugin for sorting using moment
    import 'moment'
    import 'datatables.net-plugins/sorting/datetime-moment'

    // Define the format of the date column(s)
    $.fn.dataTable.moment('DD-MM-YYYY'); 
    $.fn.dataTable.moment('dddd, MMMM D YYYY'); 
    
    export default {
        name: 'SortableDatatable',
        mounted() {
            $('#sortingtable').DataTable({
                info: false,
                lengthChange: false,
                filter: false,
                paging: false,
                order: [[2, 'asc']],
            })
        }
    }
</script>

<style lang="less">
    .container {
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    table th, table td {
        width: 333px;
    }

    table th {
        &.sorting_asc::after {
            font-family: FontAwesome;
            display: inline-block;
            content: '\f078';
            letter-spacing: 10px;
            position: relative;
            top: -2px;
            margin-left: 5px;
            color: 888;
            font-size: 14px;
        }

        &.sorting_desc::after {
            font-family: FontAwesome;
            display: inline-block;
            content: '\f077';
            letter-spacing: 10px;
            position: relative;
            top: -2px;
            margin-left: 5px;
            color: 888;
            font-size: 14px;
        }
    }
</style>
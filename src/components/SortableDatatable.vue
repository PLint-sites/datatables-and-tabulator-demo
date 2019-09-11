<template>
    <div class="container">
        <table id="sortingtable">
            <thead>
                <tr>
                <th>Name</th>
                <th>City</th>
                <th>Date of Birth</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Jan</td>
                <td>Sittard, NL</td>
                <td>31-08-1980</td>
                </tr>
                <tr>
                <td>Peer</td>
                <td>Berlin, DE</td>
                <td>05-09-1980</td>
                </tr>
                <tr>
                <td>Paddy</td>
                <td>Liege, BE</td>
                <td>25-09-1980</td>
                </tr>
                <tr>
                <td>Lim</td>
                <td>Tokyo, JP</td>
                <td>03-08-1980</td>
                </tr>
                <tr>
                <td>Yong</td>
                <td>Shanghai, CH</td>
                <td>01-09-1980</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import $ from 'jquery'
    import dt from 'datatables.net'

    import 'moment'
    import 'datatables.net-plugins/sorting/datetime-moment'
    $.fn.dataTable.moment('DD-MM-YYYY'); 
    
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
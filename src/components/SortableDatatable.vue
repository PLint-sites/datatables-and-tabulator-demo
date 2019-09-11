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
    
    export default {
        name: 'SortableDatatable',
        mounted() {
            $('#sortingtable').DataTable({
                info: false,
                lengthChange: false,
                filter: false
            })
        }
    }
</script>

<style lang="css">
    .container {
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
    }

    table th, table td {
        width: 333px;
    }
</style>
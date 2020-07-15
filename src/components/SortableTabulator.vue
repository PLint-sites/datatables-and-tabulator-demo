<template>
    <div>
        <VueTabulator v-model="data" :options="options" />
    </div>
</template>

<script>
    export default {
        name: 'SortableTabulator',
        data() {
            return {
                data: [
                    {
                        name: 'Lim',
                        city: 'Tokyo, JP',
                        dateOfBirth: '03-08-1980',
                        lastLoginDate: 'Friday, September 6 2019',
                    },
                    {
                        name: 'Jan',
                        city: 'Sittard, NL',
                        dateOfBirth: '31-08-1980',
                        lastLoginDate: 'Saturday, August 17 2019',
                    },
                    {
                        name: 'Yong',
                        city: 'Singapore',
                        dateOfBirth: '01-09-1980',
                        lastLoginDate: 'Monday, September 9 2019',
                    },
                ],
                options: {
                    height: 200,
                    layout: 'fitColumns',
                    columns: [
                        {
                            title: 'Name',
                            field: 'name'
                        },
                        {
                            title: 'City & Country',
                            field: 'city'
                        },
                        {
                            title: 'Date of Birth',
                            field: 'dateOfBirth',
                            sorter: 'date',
                            sorterParams: {
                                format: 'DD-MM-YY',
                            },
                        },
                        {
                            title: 'Last login date',
                            field: 'lastLoginDate',
                            sorter: 'date',
                            sorterParams: {
                                format: 'dddd, MMMM D YYYY',
                            },
                        },
                    ],

                }
            }
        },
    }
</script>
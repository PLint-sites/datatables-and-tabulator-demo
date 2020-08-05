<template>
  <div>
    <grid :cols="columns" :rows="rows" :sort="sort"></grid>
  </div>
</template>

<script>
import Grid from 'gridjs-vue';
import * as dayjs from 'dayjs'
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

export default {
  name: 'SortableGrid',
  components: { Grid },
  data() {
    return {
      columns: [{
        name: 'Name',
        width: '150px'
      }, {
        name: 'City & Country',
        width: '150px'
      }, {
        name: 'Date of Birth',
        width: '250px',
        sort: {
          enabled: true,
          compare: (a, b) => {
            const dayjsA = dayjs(a, 'DD-MM-YYYY').unix()
            const dayjsB = dayjs(b, 'DD-MM-YYYY').unix()
            if (dayjsA > dayjsB) {
              return 1
            } else if (dayjsA < dayjsB) {
              return -1
            } else {
              return 0
            }
          }
        },
      }, {
        name: 'Last login date',
        width: '250px',
        formatter(data) {
          return dayjs(data, 'MMMM D YYYY (dddd)').format('dddd, MMMM D YYYY')
        },
        sort: {
          enabled: true,
          compare: (a, b) => {
            const dayjsA = dayjs(a, 'MMMM D YYYY (dddd)').unix()
            const dayjsB = dayjs(b, 'MMMM D YYYY (dddd)').unix()
            if (dayjsA > dayjsB) {
              return 1
            } else if (dayjsA < dayjsB) {
              return -1
            } else {
              return 0
            }
          }
        },
      }],
      rows: [
        ['Lim', 'Tokyo, JP', '27-08-1980', 'September 6 2019 (Friday)'],
        ['Jan', 'Sittard, NL', '03-08-1980', 'August 17 2019 (Saturday)'],
        ['Yong', 'Singapore', '01-09-1980', 'September 9 2019 (Monday)'],
      ],
      sort: true,
    };
  },
};
</script>

<style lang="less" scoped>

</style>
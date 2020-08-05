# datatables-and-tabulator-demo
Sorting columns of a table is rather easy using Datatables.net. However,
sorting a column holding dates has always been a bit tricky. 

Here I'll show three ways of sorting a simple table.
1. using jQuery, Datatables.net and Datatables.net plugins
2. using vue-tabulator
3. using grid.js (and it's Vue plugin)

Note that the first tow options usemoment.js for date sorting. The latter uses dayjs, the light weight alternative to moment.

Here is how it looks:
![Screenshot of the tables](https://www.blog.plint-sites.nl/wordpress/wp-content/uploads/2020/08/tables-demo-3-plugins.png)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

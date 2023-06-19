// 开发环境配置
export default () => ({
  mysql: {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'your_mysql_root_password',
    database: 'nest_cms_api',
    synchronize: false,
  },
});

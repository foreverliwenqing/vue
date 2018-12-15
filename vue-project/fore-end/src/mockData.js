// 引入 mockjs
import Mock from 'mockjs';

// 拦截 /static/api/homepage.json 这个请求
Mock.mock('/static/api/homepage.json', {
  'status|1': [0, 1],
  'msg': function () {
    if (this.status === 0) {
      return '成功';
    } else {
      return '网络异常，请稍候重试！';
    }
  },
  'data': {
    'total|20-100': 10,
    'films|20-50': [
      {
        'filmId|1-1000': 1,
        'name': '@cname()',
        'poster': Mock.Random.dataImage('218x300'),
        'actors|5-10': [
          {
            'name': '@cname()'
          }
        ],
        'filmType': {
          'name|1': ['2D', '3D', '4D']
        },
        'nation': '@city(true)',
        'runtime|100-200': 10,
        'grade|1-10.1': 1
      }
    ]
  }
})

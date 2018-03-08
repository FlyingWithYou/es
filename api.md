# 登陆
url: /login 

method: post

params:    

|  参数 | 类型 | 描述 |   
|:-----------:|:------------:|:--------:|  
| name | string | 用户名 |  
| pwd   | string | 密码     |  



# Banner 

## 添加banner

url: /banner

method: post  

| 参数 | 类型 | 描述 |  
|:-----|:-------:|:-------|  
| color | string |    |  
| href   |  string  |   链接页面     |  
| html |  string   |  |  
| img | string | 图片 |   
| imgRetina | string |  高清图片 |  
| name |  string  | banner名称   |  
| theme | string |  背景主题 |  
| useHtml | string |  |  
| order | int  | 顺序 |  

## 获取banner

url: /banner

method: get

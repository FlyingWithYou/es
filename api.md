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
| href   |  string  |   链接页面     |  
| imgUrl | string | 图片 |   
| name |  string  | banner名称   |  
| theme | string |  背景主题 |  
| order | int  | 顺序 |  

## 获取banner

url: /banner

method: get   

| 参数 | 类型 | 描述 |  
|:-----|:-------:|:-------|  
| id    |   int     |  id  |
| href   |  string  |   链接页面     |  
| imgUrl | string | 图片 |   
| name |  string  | banner名称   |  
| theme | string |  背景主题 |  
| order | int  | 顺序 |  
| created | date | 创建时间 |
| updatedAt | date | 更新时间 |

## 获取菜单项  

url: /menu

method: get 

| 字段 | 类型 | 描述 |  
|:---:|:----:|:----|  
| id    |  int   | 菜单项id |  
| parentId | int | 父菜单项id |  
| level | int | 菜单项层级 |  
| name | string | 菜单项名称 |    

import axios from "axios";
import qs from "qs";


/*
* 注意：上传文件时contentType为file
* */
export function snatch(url, method, data, contentType) {
    //let csrfToken = Cookie.get("csrftoken");
    let config;
    if(typeof arguments[0] == "object"){
        config = arguments[0];
    } else {
        config = {
            url: url,
            method: method.toUpperCase(),
            "Access-Control-Allow-Origin": "http://localhost:3000",
            cwithCredentials: true,
            redentials: "include"
        };

        if(contentType == "file"){
            config.data = data;
        } else {
            config.headers = {

//		            cwithCredentials: true,
//		            redentials: "include"
                "Content-Type": contentType || "application/x-www-form-urlencoded",
//                "X-Requested-With": "XMLHttpRequest",
//                "x-csrf-token": csrfToken
            };
            if(data) {
                if(method && method.toUpperCase() == "GET") {
                    config.params = data;
                } else {
                    config.data = qs.stringify(data);
                }
            }
      
        }
    }
  
    return axios(config)
        .then(res => {
            let resData = res.data;
            //isLogin(resData);
            if (200 !== res.state) {
                return resData; 
            }
        })
        .catch(err => {
            throw(err);
        });
}

export function getToken(url) {
    let config = {
        url: url,
        method: "GET",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        cwithCredentials: true,
        redentials: "include"
    };
    return axios(config)
        .then(res => {
            const resData = res.data;  
            if (200 !== res.state) {
                return resData; 
            }
      
        })
        .catch(err => {
            throw(err);
        });
}


# SunFlowerClub

  

SunFlowerClub 是基于 Hexo 搭建的 LGD 心理俱乐部官方网站，旨在为用户提供一个温馨的心灵港湾，分享心理相关内容与资源。

  

## 📋 项目简介

  

该仓库是 LGD 心理俱乐部的网站源码，使用 Hexo 静态站点生成器构建，采用 [Hexo Theme Meow](https://github.com/chanwj/hexo-theme-meow) 作为主题，具备响应式设计、内容展示、搜索等功能，致力于打造一个专注于心理关怀的线上平台。

  

## ✨ 功能特点

  

-   基于 Hexo 构建，轻量高效，易于维护
-   采用 Meow 主题，界面美观可爱，支持响应式布局
-   支持文章发布、分类、标签管理
-   集成搜索功能，方便用户查找内容
-   支持文章加密（基于 `hexo-blog-encrypt` 插件）
-   自动依赖更新（通过 Dependabot 配置）

  

## 🔧 安装与使用

  

### 前置要求

  

-   Node.js (v14+)
-   npm 或 yarn

  

### 本地部署步骤

  

1.  克隆仓库
    
      
    
    bash
    
    ```
    <span class="token function">git</span> clone https://github.com/aeuicey/SunFlowerClub.git
    <span class="token builtin class-name">cd</span> SunFlowerClub
    ```
    
      
    
2.  安装依赖
    
      
    
    bash
    
    ```
    <span class="token function">npm</span> <span class="token function">install</span>
    ```
    
      
    
3.  本地预览
    
      
    
    bash
    
    ```
    <span class="token function">npm</span> run server
    ```
    
      
    
    访问 `http://localhost:4000` 即可查看网站。
    
      
    
4.  构建静态文件
    
      
    
    bash
    
    ```
    <span class="token function">npm</span> run build
    ```
    
      
    
    生成的静态文件会保存在 `public` 目录。
    
      
    
5.  部署（需配置仓库权限）
    
      
    
    bash
    
    ```
    <span class="token function">npm</span> run deploy
    ```
    
      
    

  

## 🎨 主题相关

  

网站使用 [Hexo Theme Meow](https://meow.jumaoo.top) 主题，更多配置细节可参考：

  

-   [Meow 主题文档（中文）](https://meow.jumaoo.top/categories/Docs%E6%96%87%E6%A1%A3/%E4%B8%AD%E6%96%87%E6%96%87%E6%A1%A3/)
-   [Meow 主题文档（英文）](https://meow.jumaoo.top/categories/Docs%E6%96%87%E6%A1%A3/)
-   [主题迁移指南](https://meow.jumaoo.top/posts/7287f6a/)

  

## 📌 待办功能

  

Meow 主题正在开发中的功能：

  

-   相册页 & 图片画廊
-   更多标签插件
-   动态版动态页
-   ...

  

## 📄 许可证

  

项目基于 [GNU General Public License v3.0](https://github.com/aeuicey/SunFlowerClub/blob/main/themes/meow/LICENSE) 开源。

  

## 🌐 网站链接

  

-   线上地址：[https://sunflowerclub.cn](https://sunflowerclub.cn)
-   主题演示：[Meow 主题专属网站](https://meow.jumaoo.top)

  

欢迎关注和贡献代码，你的支持是项目发展的动力！😊


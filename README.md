# tripwise-uniapp-ui

# 快速上手

## 拉取仓库

```
git clone git@gitlab.ceekeecloud.com:frontenddevelopment/tripwise_storybook.git
```

## 安装依赖

```
yarn install
```

## 启动项目

```
yarn storybook
```

## 打包

```
yarn build-storybook
```

## 一键生成文档

```
yarn generate-docs
```

## 开发流程

        1. 在`src/components`目录下新建组件文件夹，如`Button`, 组件首字母大写
        2. 在`Button`目录下新建`index.vue`文件，粘贴复制的代码
        3. 如需展示组件图片，可将图片放入当前组件目录下，即`Button`目录下
        4. 运行一键生成文档命令即可

## 代码规范

### 需设置组件所有入参的默认值
```
  description: {
     type: String,
     default: '暂无数据',
  },
```

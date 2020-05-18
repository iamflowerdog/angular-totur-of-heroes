# AngularTutorialOfHeroes

## Start at 2020/5/18

## Step 1
#### `ng generate component heroes`
* CLI 创建了一个的文件夹`src/app/heroes`,并生成 `HeroesComponent`的四个文件
* 从angular核心库中导入 `Component`符号，并为组件类加上 `@Component`装饰器
* `@Component`是个装饰器函数，用于为该组件指定Angualr所需的元数据
* CIL自动生成三个元数据属性：
    1. selector-组件的选择器（css元素选择器）
    2. templateUrl-组件模板文件的位置
    3. styleUrls-组件私有CSS样式表文件的位置
* CSS元素选择器 app-heroes是用来在父组件的模板中匹配HTML元素的名称
* ngOninit()是一个生命周期钩子，Angular在创建完组件后很快会调用，这里放置初始化逻辑的好地方
* 始终要export这个组件类，以便在其他地方导入它

#### ngModel 
* 默认情况不可用，属于一个可选模块 `FormsModule` , 必须opt-in自行添加才可用

## Step 2
* 你使用 CLI 创建了第二个组件 HeroesComponent。

* 你把 HeroesComponent 添加到了壳组件 AppComponent 中，以便显示它。

* 你使用 UppercasePipe 来格式化英雄的名字。

* 你用 ngModel 指令实现了双向数据绑定。

* 你知道了 AppModule。

* 你把 FormsModule 导入了 AppModule，以便 Angular 能识别并应用 ngModel 指令。

* 你知道了把组件声明到 AppModule 是很重要的，并认识到 CLI 会自动帮你声明它
#### NgModule
* 每个组件都必须声明在，且只能声明在 一个 NgModule 中

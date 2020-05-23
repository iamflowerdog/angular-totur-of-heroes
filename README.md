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
* 默认selectedHero 是undefined，所以需要用 *ngif指令，来设置该dom是否显示，否则会报错
#### NgModule
* 每个组件都必须声明在，且只能声明在 一个 NgModule 中

## Step 3

* @Component 元数据中指定的样式和样式表都是局限于该组件的。 heroes.component.css 中的样式只会作用于 HeroesComponent，既不会影响到组件外的 HTML，也不会影响到其它组件中的 HTML

* 英雄指南应用在一个主从视图中显示了英雄列表。

* 用户可以选择一个英雄，并查看该英雄的详情。

* 你使用 *ngFor 显示了一个列表。

* 你使用 *ngIf 来根据条件包含或排除了一段 HTML。

* 你可以用 class 绑定来切换 CSS 的样式类。
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
* `[class.some-css-class]="some-condition"` 根据条件添加或移除一个css类
* 每个组件都必须声明在，且只能声明在 一个 NgModule 中

## Step 3

* 用属性绑定语法 `[prop]="props"` 实现父组件为子组件传参数
* 用@Input装饰器来让来接收父组件传过来的属性

## Step 4

* 分离出一个单独的service，专门用来获取数据
* 引入Observable从rxjs中，用of函数来模拟，异步获取数据
* hero.service 中引入 message.service 服务中服务
* Angular只会绑定到组件的公共属性

## Step 5
* How is going.
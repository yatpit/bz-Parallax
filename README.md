# bz-Parallax

基于bilibili首页banner实现的JS组件库



### Installation

You can install it via npm:

```js
npm install bz-parallax
```

and then import it as follows:

```js
import Banner from '/script.js';
```



### Example

- Using effect: **Slide**

  Giving the following HTML:

  ```js
  <div class="Banner1">
          <div>
              <img src="background.png">
          </div>
  		<div>
              <img src='...'>
  		</div>
  </div>
  ```

  simply add the following JavaScript code:

  ```js
  new Banner('.Banner1',{
      type: 'Slide',
      speed: 4       //If speed is not set, the default value is 3
  });
  ```

  #### Setting

  | Setting | Type   | Default | Hint                                                         |
  | ------- | ------ | ------- | ------------------------------------------------------------ |
  | speed   | Number | 3       | need to be above 1 ( The higher the speed is set, the slower the images will move. ) |

  

- Using effect: **Transfer**

  Giving the following HTML:

  ```js
  <div class="Banner2">
          <div class="left">
              <img src="day.jpg">
              <img src='...'>
                    ...
          </div>
          <div class="middle">
              <img src="sunset.jpg">
              <img src='...'>
                    ...
          </div>
          <div class="right">
              <img src="night.png">
              <img src='...'>
                    ...
          </div>
  </div>
  ```

  simply add the following JavaScript code:

  ```js
  new Banner('.Banner1',{
      type: 'Transfer',
      speed: 4       //If speed is not set, the default value is 3
  });
  ```

  #### Setting

  | Setting | Type   | Default | Hint                                                         |
  | ------- | ------ | ------- | ------------------------------------------------------------ |
  | speed   | Number | 3       | need to be above 1 ( The higher the speed is set, the faseter the images will transform. ) |





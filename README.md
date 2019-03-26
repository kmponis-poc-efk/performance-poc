# performance-poc
An angular application having four(4) tabs and three users.
>On the top right corner we display the 'User' and sessionId along with a reset button. <br>When you click reset button a new string is generated. Depending on the last digit of this string the user switches to 'Admin', 'Professor', 'Student'.

* First is 'Home' tab.
* Second is 'Learning' tab. This include four(4) extra tabs: 'Angular', 'Innersource', 'Innershift', 'Twitter'.
* Third is 'Rest Api' tab. This implements a student table having one course. For the implementation of this we make httpClient calls to two(2) java web-services, student-web-service and course-web-service. At this point open browser inspector to view all rest calls. The rest calls send the sessionId as param for logging of the performance of each call. Check the terminals running the two(2) web-services to view the logs,<br> ex. *********** Performance of 'CourseController().findByCourseId(sessionId=f64b5ba4-2100)' is: 2 ms
* Fourth is 'Twitter' tab. On this tab we will show the tweets having the QR codes.

## Prerequisites
* To run the application you need to have java8, git, mvn, noteJS and npm package installed. To initialise the database you have to go on tab admin.

* Run performance-indicator
<br>[ReadMe.md] of https://innersource.soprasteria.com/kostas.bonis/performance-indicator

* Run course-web-service
<br>[ReadMe.md] of https://innersource.soprasteria.com/kostas.bonis/course-web-service.git

* Run student-web-service 
<br>[ReadMe.md] of https://innersource.soprasteria.com/kostas.bonis/student-web-service.git

## Run
* Open new terminal and move to your workspace.
* Download project using your username: 
    ```sh
    $ git clone https://[username]:YHue6otaQtGF36gavUBZ@innersource.soprasteria.com/kostas.bonis/performance-poc.git
    ```
* Go to project: 
    ```sh
    $ cd performance-poc/
    ```
* Build project: 
    ```sh
    $ npm install
    ```
* Start application: 
    ```sh
    $ ng serve
    ```
	If you don't have ng:
	```sh
    $ npm run ng serve
    ```
	
## Use    
* Go to browser: localhost:4200
* Enjoy the application ;)
* Check the logs on fluentD
    ```sh
    $ tail -f /var/log/td-agent/td-agent.log
    ```

## Further Angular Information 
* Development server:
<br>This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

* Code scaffolding:
<br>Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

* Build:
<br>Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

* Running unit tests:
<br>Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

* Running unit tests:
<br>Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

* Running end-to-end tests:
<br>Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

* Further help:
<br>To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
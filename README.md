# Home Reactor 
###### Home Reactor is an open source project attempting to create a modular platform and engaged community that enables developers to easily add in their react applications into a touch screen system with minimal effort and setup. 

The focus of our platform is mainly for productivity and Internet of Things control, but it could really be applied for whatever you'd like.

The platform has scripts that run and recreate the react routing structure based on developer modules. So, as long as the developer implements their file structure in the correct way, they should be able to drag their files into our "devmodules" folder, run our script, and be up and running in no time.

To start the platform just pull install `docker` and `docker-compose` and then pull down our `docker-compose.yml` file:
There are two options to get going:
1) Start our platform with our starter apps
2) Create a 'devmodules' folder with your apps and then the platform will include your apps as well.

## First, let's make sure your OS is good to go:
We use docker so there isn't much work on setting up your operating system but, there are a still a couple of things you need to do in order to make sure things play well.
First do your basic Raspbian or Ubuntu install developing on your hardware. (apt-get update, apt-get upgrade, etc.) 

*(Please vsit our full site [ASAP Labs](www.asap-labs.com) for more detailed instructions on getting setup from your base image)*

Then make sure you have docker and docker compose installed:
*For a regular operating System (full ubuntu, etc.):*
```sh
sudo apt-get install docker
sudo apt-get install docker-compose
```
*For a Raspberry pi (or other arm32v7 architectures):*
```sh
curl -sSL https://get.docker.com | sh
sudo apt-get install docker-compose
```

Then, if you want to run in **kiosk mode**, also install *chromium-browser*
```sh
sudo apt-get install chromium-browser
```

## Now, to your home reactor!

#### 1) To just get going and see what it's all about:
-Pull down our docker-compose file from github: 

```sh
git clone https://github.com/Home-Reactor/home-reactor-compose.git
cd reactor-compose
```
-Run our docker compose:
```sh
#Ubuntu - use "start"
sudo docker-compose run --rm --service-ports start
#Pi - use "pistart"
sudo docker-compose run --rm --service-ports pistart
```
Then either go to localhost:3000 in your browser, or run the following chromium-browser command to put your computer into kiosk mode (which allows it to take the entire screen (note: `alt-tab` will let you out of that).
```sh
sudo chromium-browser --kiosk http://localhost:3000
```
That's it! Good to go.

#### 2) Our platform is more fun with your Apps! Let's get to the real stuff
**First, pull down the docker-compose file and cd into that folder**
```sh
git clone https://github.com/Home-Reactor/reactor-compose.git
cd reactor-compose
```
Now you should be in the folder and see the following
- docker-compose.yml
- README.md
 **This is the most important part** 
 - make directory called `devmodules` in the current directory.
 - Copy whatever folder(s) you want into the devmodules folder but *Be sure that for each of your apps the format is as follows*: 
folder = *nameofyourapp* (note: all lowercase)
topfile = *Nameofyourapp.jsx* (note: capitalized first letter)
**Ex: for an added LedStrip app:**
folder = *ledstrip*
topfile = *Ledstrip.jsx*

*Note: by 'topfile' we mean the file that you would probably regularly be importing and hanging on the "root" in your `index.js` file. (often people call it App.jsx - the naming internally doesn't matter, just the file name)* 
aka: the one that you usually put into here:
```js
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
``` 
*(Change the name of that `<App />` file to the name of your app)*

** Then, copy your app's package.json into your main folder.** Our scripts look for any additional packages and install them

**Next, simply run the following 'dev' command, instead of the previous 'start' command** and the scripts will handle putting your files into our react router setup
```sh
#Ubuntu - use "dev"
sudo docker-compose run --rm --service-ports dev
#Pi - use "pidev"
sudo docker-compose run --rm --service-ports pidev
```
Then either go to localhost:3000 in your browser, or run the following chromium-browser command to put your computer into kiosk mode (which allows it to take the entire screen (note: `alt-tab` will let you out of that).
```sh
sudo chromium-browser --kiosk http://localhost:3000
```
Initial start up takes a little bit of time, but after the initial start up the switching back and forth between apps is extremely fast.

## Advanced Users! - Live Data
###### One of the great things about react is how modular it is. With this in mind. We can embed an actual react component in our thumbnail section, and therefore have live data there - and then when it is clicked, it will render a more enhanced set of that applications data. 
So, for example, a weather app can render the current weather at all times in the thumbnail, and then when you click on it, the app will load in the main page and show a week forecast.  

If you want live data in your thumbnail,  then the process is similar to the initial `devmodules` folder where you put your app. Except now, you'll make another folder in that main directory called `devthumbnails`. (in previous regular steps this folder was created automatically by the scripts.



So, now in that main folder, you see the following
- docker-compose.yml
- README.md
- devmodules
- devthumbnails

*Follow the same module steps as before, but for the naming convention:*
folder = *nameofyourappThumb* (note: lowercase, capital T in Thumb)
topfile = *Nameofyourappthumb.jsx* (note: capitalized first letter, lowercase 'thumb')

**Ex: for an added LedStrip app:**
folder = *ledstripThumb*
topfile = *Ledstripthumb.jsx*

##Removing our Starter Apps:
As was mentioned, our focus was making a modular platform that you could make it your own (but please share your apps so others can benefit :).  With that in mind, feel free to remove our starter apps, and replace them with your own or other 3rd party modules. In this future, we plan to make this easier through a script. But, for now, follow these steps
#### 1) Go to our main github page and pull down our full file structure. 
#### 2) Go into `modules` folder and delete the application folder you don't want
#### 3) Go into `thumbnails` folder and delete that app's corresponding thumbnail folders/files
#### 4) Run a new docker build:
```sh
sudo docker build -t homereactor .
sudo docker run -p 3000:3000 homereactor
#in new terminal
chromium-browser --kiosk http://localhost:3000
```

That should do it - up and running

Please let us know if you have any issues with these setup steps or have any other requests.
We'll try to put more information and links at our website to help provide resources to help you with you touch screen setups and installation instructions.
[ASAP Labs](www.asap-labs.com)

# JOIN us and build something awesome 
We see this platform as an opportunity to create a wonderful marriage between smart mirror/productivity enthusiasts and home automation/Internet of Things enthusiasts; because right now, the communities seem to be fairly segregated. This platform aims to unite open source developers to work towards the best of many worlds. 

We feel that using React's modular routing capabilities, mixed with touch screen hubs, and relatively inexpensive small computers like raspberry pi's, make it possible to integrate simple "at a glance" applications to help productivity (such as magic mirror type widgits) with home automation applications that require pushing buttons and changing switches (such as home-assistant platform).

So far we are just at the beginning setup, with a focus on having a clean platform that is very easy for developers to contribute to. We will definitely be addressing any bugs people come accross with our installation process, and make it easier to use, but in additon to that we would definitely love help on taking our platform to the next level by contributing 3rd party applications and infrastructure. 
  A quick Wish List of growth opportunities:
    - Server Support 
        - Integrated through docker container/volumes
          - MongodB/Mongoose
          - SQL - postgres?
    - Kiosk auto boot
    - Kiosk Mode Security
    - Voice to Text:
      - Integration with Mycroft open source speech assistant (keeping with the open source theme)
      - Integration with Amazon Alexa and Google Home
    - More starter apps for the home page
    - Sockets for interconnected screens
    - Home Assistant integration - Home assistant has an api, but we have yet to implement it yet, it would be great if a hass enthusiast developed onto our platform. 


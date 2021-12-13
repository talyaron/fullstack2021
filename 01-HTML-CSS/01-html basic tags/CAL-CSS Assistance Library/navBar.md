<!--HTML

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet">
        
    <link rel="stylesheet" href="dist/style.css">

    <title>navBar</title>
</head>

<body>
    <div class="navigation">
        <ul>
            <li class="list active">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span class="text">Home</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="person-outline"></ion-icon>
                    </span>
                    <span class="text">Profile</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="chatbubble-outline"></ion-icon>
                    </span>
                    <span class="text">Message</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="camera-outline"></ion-icon>
                    </span>
                    <span class="text">Photos</span>
                </a>
            </li>
            <li class="list">
                <a href="#">
                    <span class="icon">
                        <ion-icon name="settings-outline"></ion-icon>
                    </span>
                    <span class="text">Settings</span>
                </a>
            </li>
            <div class="indicator"></div>
        </ul>
    </div>
    <script>
        const list = document.querySelectorAll('.list');
        function activeLink(){
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
        }
        list.forEach((item) =>
        item.addEventListener('click', activeLink));

    </script>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
</body>

</html>

CSS
===

* {
  font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --clr: #222237;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--clr);
}

.navigation {
  width: 400px;
  height: 70px;
  background: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.navigation ul {
  display: flex;
  width: 350px;
}

.navigation ul li {
  position: relative;
  list-style: none;
  width: 70px;
  z-index: 1;
}

.navigation ul li a {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5rem;
  transition: 0.5s;
  color: var(--clr);
}

.navigation ul li.active a .icon {
  transform: translateY(-32px);
}

.navigation ul li a .text {
  position: absolute;
  color: var(--clr);
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.05rem;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
}

.navigation ul li.active a .text {
  opacity: 1;
  transform: translateY(10px);
}

.indicator {
  position: absolute;
  background-color: #29fd53;
  width: 70px;
  height: 70px;
  top: -50%;
  border-radius: 50%;
  border: 6px solid var(--clr);
  transition: 0.5s;
}

.indicator:before {
  content: "";
  position: absolute;
  top: 50%;
  left: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-right-radius: 20px;
  box-shadow: 1px -10px 0 0 var(--clr);
}

.indicator:after {
  content: "";
  position: absolute;
  top: 50%;
  right: -22px;
  width: 20px;
  height: 20px;
  background: transparent;
  border-top-left-radius: 20px;
  box-shadow: -1px -10px 0 0 var(--clr);
}

.navigation ul li:nth-child(1).active ~ .indicator {
  transform: translateX(calc(70px * 0));
}

.navigation ul li:nth-child(2).active ~ .indicator {
  transform: translateX(calc(70px * 1));
}

.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(70px * 2));
}

.navigation ul li:nth-child(3).active ~ .indicator {
  transform: translateX(calc(70px * 2));
}

.navigation ul li:nth-child(4).active ~ .indicator {
  transform: translateX(calc(70px * 3));
}

.navigation ul li:nth-child(5).active ~ .indicator {
  transform: translateX(calc(70px * 4));
}

-->


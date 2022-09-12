import 'dart:html';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:my_first_project/calc.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

List<Color> myColors = [
  Colors.blue,
  Colors.red,
  Colors.green,
  Colors.orange,
  Colors.purple,
  Colors.yellow,
  Colors.pink,
  Colors.black,
];

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  String myText = 'Nothing';
  Color chosenBackgroundColor = Colors.white;

  void textSubmitted(value) {
    setState(() {
      myText = value;
    });
    // myText = value;
  }

  void changeBackground(Color color) {
    setState(() {
      chosenBackgroundColor = color;
    });
  }

  void _incrementCounter() {
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) =>
            const MyCalcPage(title: 'My Calculator Page')
      ),
    );

    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  void decrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      backgroundColor: chosenBackgroundColor,
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.

        child: Column(
          // Column is also a layout widget. It takes a list of children and
          // arranges them vertically. By default, it sizes itself to fit its
          // children horizontally, and tries to be as tall as its parent.
          //
          // Invoke "debug painting" (press "p" in the console, choose the
          // "Toggle Debug Paint" action from the Flutter Inspector in Android
          // Studio, or the "Toggle Debug Paint" command in Visual Studio Code)
          // to see the wireframe for each widget.
          //
          // Column has various properties to control how it sizes itself and
          // how it positions its children. Here we use mainAxisAlignment to
          // center the children vertically; the main axis here is the vertical
          // axis because Columns are vertical (the cross axis would be
          // horizontal).
          mainAxisAlignment: MainAxisAlignment.start,
          mainAxisSize: MainAxisSize.max,
          children: <Widget>[
            Text('The current background color is $chosenBackgroundColor.'),
            Expanded(
              // child: Column(
              //   children: <Widget>[
              // Text('The current background is ${chosenBackgroundColor.toString()}'),
              child: ListView.builder(
                scrollDirection: Axis.horizontal,
                shrinkWrap: true,
                // padding: const EdgeInsets.only(left: 5, right: 5),
                itemCount: myColors.length,
                itemBuilder: (BuildContext context, int index) {
                  return SizedBox(
                    height: 30,
                    width: 160,
                    child: ElevatedButton(
                      onPressed: () {
                        changeBackground(myColors[index]);
                      },
                      style: ButtonStyle(
                          backgroundColor: MaterialStateColor.resolveWith(
                              (states) => myColors[index])),
                      child: Text('${myColors[index]}'),
                    ),
                  );
                },
              ),
              // ],
              // ),
            ),
            SizedBox(
              width: 150,
              child: TextField(
                decoration: const InputDecoration(labelText: 'input something'),
                onSubmitted: (String value) {
                  textSubmitted(value);
                },
              ),
            ),

            Text(
              'You have typed the word $myText:',
            ),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
            // Container(
            //   margin: const EdgeInsets.symmetric(vertical: 20.0),
            //   height: 200.0,
            //   child: ListView(
            //     // This next line does the trick.
            //     scrollDirection: Axis.horizontal,
            //     children:  <Widget>[
            //       myColors.map((element) {
            //         Container(
            //           width: 160.0,
            //           color: Colors.element,
            //         )
            //       }),
            //     Container(
            //         width: 160.0,
            //         color: Colors.red,
            //       )
            //     ],
            //   ),
            // ),
            Container(
              child: ElevatedButton(
                  onPressed: decrementCounter,
                  style: ButtonStyle(backgroundColor:
                      MaterialStateProperty.resolveWith((states) {
                    if (states.contains(MaterialState.pressed)) {
                      return Colors.green;
                    }
                    if (states.contains(MaterialState.hovered)) {
                      return Colors.orange;
                    }
                  })),
                  child: const Padding(
                    padding: EdgeInsets.all(20),
                    child: Text(
                      'decrement the counter',
                      textAlign: TextAlign.start,
                      style: TextStyle(color: Colors.deepOrange),
                      textScaleFactor: 1.5,
                    ),
                  )),
            ),
            Image.asset('assets/avatar.jpeg')
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: const Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

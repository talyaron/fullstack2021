import 'dart:html';
import 'package:http/http.dart' as http;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class MyCalcPage extends StatefulWidget {
  const MyCalcPage({Key? key, required this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyCalcPage> createState() => _MyCalcState();
}

class _MyCalcState extends State<MyCalcPage> {
  int _number = 0;

void changeNumber(int number){
  setState(() {
    _number = number;
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
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text('$_number'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        children: <Widget> [
          GridView.count(
            shrinkWrap: true,
            reverse: true,
            // Create a grid with 2 columns. If you change the scrollDirection to
            // horizontal, this produces 2 rows.
            crossAxisCount: 3,
            // Generate 100 widgets that display their index in the List.
            children: List.generate(10, (index) {
              return Center(
                child: FloatingActionButton(onPressed:(){changeNumber(index);} , child:
                 Text(
                  '$index',
                  style: Theme.of(context).textTheme.headline5,
                ),),
              );
            }),
          ),
        ],
      ),
    );
  }
}

import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {


  @override
  State<StatefulWidget> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  var qustIndex = 0;

  void answerQust(){
    setState(() {
      qustIndex = qustIndex + 1;
    });

    print(qustIndex);

  }



  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(

        body: ListView(
          physics: NeverScrollableScrollPhysics(),
            children: [
            Padding(
              padding: EdgeInsets.only(top: 10.0),
              child: Container(
                height:100,
                child: Column(
                  children: [
                    Text(style: TextStyle(fontSize: 20,fontWeight: FontWeight.bold),'What are your goals?'),
                    Text('Select which apply to you')
                  ],
                ),

              ),
            ),

              Padding(
                padding: const EdgeInsets.symmetric(vertical:20.0 ),
                child: Container(
                  margin: const EdgeInsets.only(left: 20.0, right: 20.0),
                  height: 500,
                  child: GridView(
                    children: [
                      Container(
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20),
                            color: Colors.white,
                            boxShadow: [
                              BoxShadow(
                                  blurRadius: 5.0,
                                  color: Colors.black,
                                  offset: Offset(0, 5)),
                            ]),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.heart_broken_outlined,
                              size: 50,
                              color: Colors.black,
                            ),
                            Text(
                              'Be healthier',
                              style: TextStyle(
                                  color: Colors.black, fontSize: 20),
                            )
                          ],
                        ),
                      ),
                      Container(
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20),
                            color: Colors.white,
                            boxShadow: [
                              BoxShadow(
                                  blurRadius: 5.0,
                                  color: Colors.black,
                                  offset: Offset(0, 5)),
                            ]),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.clean_hands_outlined,
                              size: 50,
                              color: Colors.black,
                            ),
                            Text(
                              'Manage my glucose',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.black,
                                fontSize: 20,
                              ),
                            )
                          ],
                        ),
                      ),
                      Container(
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20),
                            color: Colors.white,
                            boxShadow: [
                              BoxShadow(
                                  blurRadius: 5.0,
                                  color: Colors.black,
                                  offset: Offset(0, 5)),
                            ]),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.power_outlined,
                              size: 50,
                              color: Colors.black,
                            ),
                            Text(
                              'Increase my energy levels',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                  color: Colors.black, fontSize: 20),
                            )
                          ],
                        ),
                      ),
                      Container(
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20),
                            color: Colors.white,
                            boxShadow: [
                              BoxShadow(
                                  blurRadius: 5.0,
                                  color: Colors.black,
                                  offset: Offset(0, 5)),
                            ]),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.person_outline,
                              size: 50,
                              color: Colors.black,
                            ),
                            Text(
                              'Lose weight ',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                  color: Colors.black, fontSize: 20),
                            )
                          ],
                        ),
                      ),
                      Container(
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20),
                            color: Colors.white,
                            boxShadow: [
                              BoxShadow(
                                  blurRadius: 5.0,
                                  color: Colors.black,
                                  offset: Offset(0, 5)),
                            ]),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.local_drink_outlined,
                              size: 50,
                              color: Colors.black,
                            ),
                            Text(
                              'Learn to cook',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                  color: Colors.black, fontSize: 20),
                            )
                          ],
                        ),
                      ),
                      Container(
                        decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(20),
                            color: Colors.white,
                            boxShadow: [
                              BoxShadow(
                                  blurRadius: 5.0,
                                  color: Colors.black,
                                  offset: Offset(0, 5)),
                            ]),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              Icons.menu_book,
                              size: 50,
                              color: Colors.black,
                            ),
                            Text(
                              'Learn new recipes',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                  color: Colors.black, fontSize: 20),
                            )
                          ],
                        ),
                      ),
                    ],
                    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        mainAxisSpacing: 20,
                        crossAxisSpacing: 20,
                      childAspectRatio: 2.2/2,
                    ),
                  ),
                ),


              ),

              Padding(
                padding: EdgeInsets.only(bottom: 10.0),
                child: Container(
                  height:100,
                  child: Column(
                    children: [
                      RaisedButton( color: Colors.white, child: Text('next'), onPressed:answerQust ),


                    ],
                  ),

                ),
              ),



            ]

        ),
      )


    );
  }
  }

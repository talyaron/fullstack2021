import 'package:flutter/material.dart';

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

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  String _fullname = '';
  String _password = '';
  bool _canRegister = false;


  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();

  Widget _buildNameField() {
    return TextFormField(
      decoration: const InputDecoration(labelText: 'Full name'),
      validator: (String? value) {
        if (value != null && value.isEmpty) {
          return 'Full name is required';
        }
        return null;
      },
      onSaved: (String? value) {
        setState((){
          _fullname = value!;
        });
      },
    );
  }

  Widget _buildPasswordField() {
    return TextFormField(
      decoration: const InputDecoration(labelText: 'Password'),
      validator: (String? value) {
        if (value != null && value.isEmpty) {
          return 'Password is required';
        }
        return null;
      },
      onSaved: (String? value) {
        setState((){
          _password = value!;
        });
      },
    );
  }

  Widget _buildPassword2Field() {
    return TextFormField(
      decoration: const InputDecoration(labelText: 'Confirm password'),
      validator: (String? value) {
        if (value != null && value.isEmpty) {
          return 'Password is required';
        }
        if (_password != value) {
          return "Password are not matching";
        }
        return null;
      },
      onSaved: (String? value) {
        setState((){
          //TODO : show that both passwords are okay
        });
      },
    );
  }

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
  }

  void _onRegisterPressed() {
    //TODO: call login function on the server
    print(_fullname);
    print(_password);
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
      body: Container(
        margin: const EdgeInsets.all(24),
        child: Form(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.end,
            children: [
              _buildNameField(),
              _buildPasswordField(),
              _buildPassword2Field(),
              const SizedBox(
                height: 30,
              ),
              ElevatedButton(

                onPressed: () => {_onRegisterPressed()},
                child: const Text('Register'),
              )
            ],
          ),
        ),
      ),
      // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}

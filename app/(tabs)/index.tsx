/*import { Image } from 'expo-image';
import { Platform, StyleSheet } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

import React, { useState } from 'react';

function Welcome() {
  const [name, setName] = useState("Name");

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Enter your name" 
      />
    </div>
  );
}

export default Welcome;*/

// src/Login.js

/*import { signInWithEmailAndPassword } from 'firebase/auth';*/
import React, { useState } from 'react';
/*import { auth } from './firebase';*/

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  /*const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      // redirect to dashboard
    } catch (err) {
      setError(err.message);
    }
  };*/

  return (
    <div style={styles.box}>
      <h2 style={styles.title}></h2>
      <input style={styles.input} type="text" placeholder='username'/> 
      <input style={styles.input} type="text" placeholder='email'/>
      
      <button style={styles.button}>Log In</button>
      <button style={styles.button}>Sign Up</button>
    </div>
  );
};

const styles = {
  box: {
    maxWidth: '300px',
    margin: '100px auto',
    padding: '20px',
    border: '2px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  } as React.CSSProperties,
  title: {
    marginBottom: '20px',
  },
  input: {
    width: '90%',
    padding: '10px',
    marginBottom: '20px',
    borderRadius: '4px',
    border: '2px solid #aaa',
    
    
  },
  button: {
    width: '60%',
    padding: '8px',
    marginBottom: '8px',
    marginRight: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',

  },
};


export default Login;

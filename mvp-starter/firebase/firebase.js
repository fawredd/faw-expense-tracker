/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD25phTENJOTC12L1tFvJIM_aw3pyjwEn4",
  authDomain: "faw-expense-tracker.firebaseapp.com",
  projectId: "faw-expense-tracker",
  storageBucket: "faw-expense-tracker.appspot.com",
  messagingSenderId: "16380374885",
  appId: "1:16380374885:web:8ac074b6a8b2f88db4bb8c",
  measurementId: "G-XKXM52JFPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import React, {useState, useEffect} from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Clipboard,
  TouchableOpacity,
} from "react-native";

const InputFormText = () => {
  const [text, setText] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setError(""), setHashtag(""), setText("");
  }, []);

  const onClickCopy = async () => {
    if (hashtag.length === 0) {
      setError("Nothing to copy");
    } else {
      await Clipboard.setString(hashtag);
      alert(`Copied: ${hashtag} to clipboard`);
      setText("");
    }
  };

  const generateHashtag = () => {
    if (text.length === 0) {
      setError("Please enter Text");
    } else {
      // Turn text so array
      let textArray = text.split(" ");

      // Capitalize each first letter
      let firstLetterArr = textArray.map(
        // The first value of every index gets uppercase and the other gets lowercase
        i => i.charAt(0).toUpperCase() + i.substr(1).toLowerCase(),
      );

      // Add the hash symbol
      firstLetterArr.unshift("#");

      // Turn array to string and remove spaces
      let hash = firstLetterArr.join("");

      setError("");
      setHashtag(hash);
      setText("");
    }
  };

  return (
    <View>
      <TextInput
        value={text}
        style={styles.textInput}
        placeholder="Type here..."
        placeholderTextColor="white"
        onChangeText={text => setText(text)}
      />

      <Text style={styles.errorText}>{error && <Text>{error}</Text>}</Text>

      <View>
        <TouchableOpacity style={styles.hashButton} onPress={generateHashtag}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.hashtag}>
        {hashtag && !error && <Text>{hashtag}</Text>}
      </Text>

      <View>
        <TouchableOpacity style={styles.copyButton} onPress={onClickCopy}>
          <Text style={styles.buttonText}>Copy to Clipboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    margin: 20,
    color: "#fff",
  },
  hashButton: {
    marginBottom: 20,
    margin: 10,
    padding: 20,
    backgroundColor: "#66bb6a",
  },
  copyButton: {
    marginTop: 20,
    margin: 10,
    padding: 20,
    backgroundColor: "#ffca28",
  },
  hashtag: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 25,
    color: "#fff",
  },
  errorText: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 30,
    color: "#ff4040",
    fontWeight: "bold",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
  },
});

export default InputFormText;

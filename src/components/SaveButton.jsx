<TouchableHighlight
  title="Save"
  style={styles.button}
  onClick={() => this.saveEntry(document.getElementById("entryForm").value)}
>
  <Text>Push</Text>
</TouchableHighlight>;
{
  /* <Button
          title="Save"
          style={styles.button}
          // onPress={() =>
          //   this.saveEntry(document.getElementById("entryForm").value)
          // }
          onPress={() => alert("save button pressed")}
        ></Button> */
}

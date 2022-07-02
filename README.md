# Project shop book
> Design book shop interface like an online book reading app, you can click on any type of book and read it
### Installation && Usage
The application is run online on the website https://snack.expo.dev/ <br>
- Step 1: Create an expo account to run the app demo <br>
- Step 2: Choose the interface to demo as web, iphone .. or your personal phone
- Step 3: Click on the book you want to read and read it.
### View code in Screen
- HomeScreen
```php
 return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSession}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>
      {/* Body Section */}

      <ScrollView style={styles.myBook}>
        {/* Body Section */}
        <View style={styles.bookContainer}>
          {renderMyBookSection(myBooks, navigation)}
        </View>
        {/* Categoryes Section */}
        <View style={styles.categorySetion}>{renderCategoryHeader()}</View>
        <View>{renderCategoryData()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
```
- BookDetail  (If there are books to be passed, then if . will be performed)
```php
 if (book) {
    return (
      <View style={styles.container}>
        <View style={styles.bookContainer}>{renderBookInfoSection()}</View>
        <View style={styles.descriptionContainer}>
          {renderBookDescription()}
        </View>
        <View style={styles.buttonContainer}>{renderBottomButton()}</View>
      </View>
    );
  } else {
    return <></>;
  }
```
## Result on completion
- Homepage results <br>

<img src="https://lh3.googleusercontent.com/5dbtzoAyq6YCAAbPffdu_Ecgw6t2AUH5oCiT7TX0MORhJ2nLbZTB5TlxLCFE-Jp-nKiPD_cgQ4v12XT7qlzfea9-TXIltJ02bqqY8UFO9tMBHIDBaqnQ9SwPg8opL9FgfNGFQK_CGqTu-RXybg0kJVg89S1zJDWPt8sKS_ZoK85da5Lmv1F5oaHUQmsc2ZMw2jfoyfr4dAfxAT9hgt0NGEpD_i2ephyJN6pw0t_qjA6e4XSkHCrLNtNBNfVkBVtCkrmpzW84p41m0CpbLx0kgkz3hwXN9DroLlvecLhdIsQGUsWtshTICcthIeqfBLShICCP0s6ELWxOdUObyvk8cDirUUW7HGN32d0maN2F04qmT20P_el7Ow6zgPbyQ3DuwlQjHQewMcWnaUaAVVEO_ZR_yISOEI7Cpo6vJW5_0TgbpWLHqfzvD2V4QZyAUcJidOESeWjSzV560WmzhIkSCGvZ634GdagDryZuMJiDequUmXc6L4msz0n0nbFZ7iOQF8EoPrxcGsGBXSK3du_aPXfh-HYBwrRt7p4XA43qRgXGGpIpybOuVerFzmb_ayyc_NFdeMTvqE5FsvuUufm2JT52ARsUgZxq6rBeRPpi-Y1OG9TU5cgrSoIMscNwk4i0jGdT20xis0AY6fSp-jIjk71_t5w_p_iXkYfdUarMwpErtxsmkjFoQx6cmWmDkkR-89QThZQ_Z9wk5EqRaCssfMs=w502-h1008-no?authuser=0"  width="320" height="620">

- BookDetail results <br>
<img src="https://lh3.googleusercontent.com/YD9hMISC-U7mnS4o-1zFrXRcIlfx2x7wGXVb1PjkwMUnLBmDK4-8uLLEdjXI_Hjd3376OlOTqt3Jw05f2WQi8muWu0ae6e0PmlLM65yXBCWVn-K20zBYA9hmq9ATDqvOdimwMlkTCKP8TnbVPnOUtFvwPLEFRFw0wGTdAyL57CwPZZyPdSK3Doks0KupqdagNx_fBVFvlukRS20139S-UAy-gPLZjMb6JUfDsgdQfmQRjN141LZZZgpvKQZYbIEMw2KKVKTqWsuW1O_dwnpVI9caBfZgcylFNCzGjLaNPXWVM4oljBnb0ywUO0kCAGhi2JMhTkznzYhwFvhlvVNT4fOSn3y1D2STAj46B9OnN_ixK277Pv5MacIFJG27Q_qHCzOz5xUai3Da3aN_Fa0qXIOatCbXvQrhuHg-9KM_UTrirRnEf-8YLKkXyiPyBcMlaCagIy2mKi-UR-PfkxsmFKygM5TTJeBgeOCVL9QQ9NhbyRk30YgxQLSZzeHE-xdOr0Uf_Ya_kgHCF-1fb7hoL0wtybcENnXni3hEzDJAst3dDJAvfPiLbk5vYTXPt61konj29ACBpj3Qq0JxNMotTQNfmPY8yiPKP9leSWTUHtn5VXemuH1-DT0bP8NAhLP-XF8wNhpYvEQucoN4NxtAA61wlqRc8vnhEu98NVpn4dBeuMdx9P-fshmf6nDFAY394i2-bEL50CS_ffY9spnpWyU=w490-h1006-no?authuser=0"  width="320" height="620">

- Demo UI Video <br>
[![](https://res.cloudinary.com/marcomontalbano/image/upload/v1642259203/video_to_markdown/images/youtube--cUcFJQvaUNk-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=cUcFJQvaUNk "")



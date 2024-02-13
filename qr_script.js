document.addEventListener("DOMContentLoaded", function() {
            Quagga.init({
                inputStream: {
                    name: "Live",
                    type: "LiveStream",
                    target: document.querySelector("#interactive"),
                },
                decoder: {
                    readers: ["code_128_reader", "ean_reader", "ean_8_reader"],
                },
            });

            Quagga.onDetected((result) => {
                const code = result.codeResult.code;
                document.getElementById("result").innerText = code;
            });

            Quagga.start();
        });
		
		Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#yourElement')    // Or '#yourElement' (optional)
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });
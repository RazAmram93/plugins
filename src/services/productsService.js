export const fetchProducts = async () => {
  try {
    //fetch plugins
    const response = await fetch(import.meta.env.VITE_API_URL);
    //check if OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    //plugins json arr
    const data = await response.json();

    //creating new arr 
    let finalArr = [];
    //loop to check if hybrid exists
    for (let i = 0; i < data.length; i++) {
      console.log(data[i].dataRecord.vars.hybrid_token + " hybrid vars ");

    }
    return (data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }


  //func to check if plugin's token exists in this store
  async function getHybridVars(hybridToken) {
    try {
      console.log(hybridToken);

      var hybridResponse = await fetch(`/admin/user_files/fetch?token=${hybridToken}`);
      var hybridResponseJson = await hybridResponse.json();
      if (hybridResponseJson.error) {
        return null;
      }
      return hybridResponseJson;
    } catch (error) {
      console.error("Function getHybridVars error: " + error);
      return error;
    }
  }

};
function tempo(request, response) {
    const dynamicDate = new Date(); 

    const subscribersResponse = await fetch("https://api.convertkit.com/v3/subscribers?api_secret=Mt7SNE81zlB_ZVk-H9n5nXwakV80TEO5yNc4Fxhd11Y&from=2016-02-01&to=2021-03-15");
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    });
}

export default tempo;
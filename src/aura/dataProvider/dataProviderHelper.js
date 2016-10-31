({
    fireDataChangeEvent: function(dataProvider, data, currentPage) {
        var dataChangeEvent = dataProvider.getEvent("onchange");
        dataChangeEvent
            .setComponentEvent()
            .setParams({
                data: data,
                currentPage: currentPage
            }).fire();
    }
})
//bind $ to jquery in this scope
(function($) {
    //initiate variables
    var count,
        hello,
        smiley,
        $clicks,
        $body; //i tend to use '$' before a variable when it's a selector
    
    function handleBodyClick() {
        count+=1;
        $clicks.addClass('is--active');
        $clicks.html('You clicked ' + count + ((count != 1) ? ' times':' time') + '!');
    }

    //event bindings
    function bindings() {
        console.log(hello + smiley);
        $body.on('click', handleBodyClick);
    }

    $(document).ready(function() {
        //assign variables when DOM is ready
        hello = 'Hi';
        smiley = ' :)';
        count = 0;
        $clicks = $('.clicks');
        $body = $('body');

        //execute bindings 
        bindings();
    });
})(jQuery);


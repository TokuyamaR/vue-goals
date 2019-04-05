Vue.component('activity-item', {
    props:['activity'],
    template:`
    <article class="post">
        <h4>Learn Vue.js</h4>
        <div class="media">
            <div class="media-left">
                <p class="image is-32x32">
                    <img src="./images/user.png">
                </p>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <a href="#">Tokuyaman</a> updated 40 minutes ago &nbsp;
                    </p>
                </div>
            </div>
            <div class="media-right">
                <span>進捗率のバーをここに表示</span>
            </div>
        </div>
    </article>    
    `
});

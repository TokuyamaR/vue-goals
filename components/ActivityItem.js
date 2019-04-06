Vue.component('activity-item', {
    props: ['activity'],
    template: `
    <article class="post">
        <h4>{{ activity.title }}</h4>
        <p>{{ activity.note }}</p>
        <div class="media">
            <div class="media-left">
                <p class="image is-32x32">
                    <img src="./images/user.png">
                </p>
            </div>
            <div class="media-content">
                <div class="content">
                    <p>
                        <a href="#">Tokuyaman</a> updated {{ activity.updatedAt }} minutes ago &nbsp;
                    </p>
                </div>
            </div>
            <div class="media-right">
                <span>Display the progress bar here.</span>
            </div>
        </div>
    </article>    
    `
});

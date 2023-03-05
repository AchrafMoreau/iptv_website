import "./footer.css"
export default function Footer(){
    return(
        <>
            <div className="container-fluid footer pt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logo text-center"><h1>Logo</h1></div>
                        <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quis sapiente repellendus, minus, necessitatibus sunt autem deleniti voluptates perspiciatis ex, soluta libero quaerat ut aliquam provident dolor dolores dolorem accusamus!</p>
                        <div className="social_media text-center icons">
                            <i className=" fa-brands fa-facebook"></i>
                            <i className=" fa-brands fa-twitter"></i>
                            <i className=" fa-brands fa-instagram"></i>
                            <i className=" fa-brands fa-tiktok"></i>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>Privacy policy:</h4>
                        <p>We take your privacy seriously. Please read our privacy policy to learn more about how we collect and use your data.<a href="/">Here</a></p>
                        <h4>Payment methods:</h4>
                        <div className="pyment_method">
                            <svg xmlns="http://www.w3.org/2000/svg" height='64' width="64"><path fill="#139AD6" d="M49.2 28.2h-3.4c-.2 0-.4.2-.5.4l-1.4 8.8c0 .2.1.3.3.3H46c.2 0 .3-.1.3-.3l.4-2.5c0-.2.2-.4.5-.4h1.1c2.3 0 3.6-1.1 3.9-3.3.2-.9 0-1.7-.4-2.2-.6-.5-1.5-.8-2.6-.8m.4 3.3c-.2 1.2-1.1 1.2-2 1.2H47l.4-2.3c0-.1.1-.2.3-.2h.2c.6 0 1.2 0 1.5.4.2.1.2.4.2.9"/><path fill="#263B80" d="M24.7 28.2h-3.4c-.2 0-.4.2-.5.4l-1.4 8.8c0 .2.1.3.3.3h1.6c.2 0 .4-.2.5-.4l.4-2.4c0-.2.2-.4.5-.4h1.1c2.3 0 3.6-1.1 3.9-3.3.2-.9 0-1.7-.4-2.2-.6-.5-1.4-.8-2.6-.8m.4 3.3c-.2 1.2-1.1 1.2-2 1.2h-.5l.4-2.3c0-.1.1-.2.3-.2h.2c.6 0 1.2 0 1.5.4.1.1.2.4.1.9M35 31.4h-1.6c-.1 0-.3.1-.3.2l-.1.5-.1-.2c-.4-.5-1.1-.7-1.9-.7-1.8 0-3.4 1.4-3.7 3.3-.2 1 .1 1.9.6 2.5.5.6 1.2.8 2.1.8 1.5 0 2.3-.9 2.3-.9l-.1.5c0 .2.1.3.3.3H34c.2 0 .4-.2.5-.4l.9-5.6c-.1-.1-.3-.3-.4-.3m-2.3 3.2c-.2.9-.9 1.6-1.9 1.6-.5 0-.9-.2-1.1-.4-.2-.3-.3-.7-.3-1.2.1-.9.9-1.6 1.8-1.6.5 0 .8.2 1.1.4.3.3.4.8.4 1.2"/><path fill="#139AD6" d="M59.4 31.4h-1.6c-.1 0-.3.1-.3.2l-.1.5-.1-.2c-.4-.5-1.1-.7-1.9-.7-1.8 0-3.4 1.4-3.7 3.3-.2 1 .1 1.9.6 2.5.5.6 1.2.8 2.1.8 1.5 0 2.3-.9 2.3-.9l-.1.5c0 .2.1.3.3.3h1.5c.2 0 .4-.2.5-.4l.9-5.6c-.1-.1-.2-.3-.4-.3m-2.3 3.2c-.2.9-.9 1.6-1.9 1.6-.5 0-.9-.2-1.1-.4-.2-.3-.3-.7-.3-1.2.1-.9.9-1.6 1.8-1.6.5 0 .8.2 1.1.4.4.3.5.8.4 1.2"/><path fill="#263B80" d="M43.7 31.4H42c-.2 0-.3.1-.4.2L39.4 35l-1-3.2c-.1-.2-.2-.3-.5-.3h-1.6c-.2 0-.3.2-.3.4l1.8 5.3-1.7 2.4c-.1.2 0 .5.2.5h1.6c.2 0 .3-.1.4-.2l5.5-7.9c.3-.3.1-.6-.1-.6"/><path fill="#139AD6" d="m61.3 28.5-1.4 9c0 .2.1.3.3.3h1.4c.2 0 .4-.2.5-.4l1.4-8.8c0-.2-.1-.3-.3-.3h-1.6c-.1-.1-.2 0-.3.2"/><path fill="#263B80" d="M12 25.2c-.7-.8-2-1.2-3.8-1.2h-5c-.3 0-.6.3-.7.6l-2 13.1c0 .3.2.5.4.5H4l.8-4.9v.2c.1-.3.4-.6.7-.6H7c2.9 0 5.1-1.2 5.8-4.5v-.3c-.1 0-.1 0 0 0 .1-1.3-.1-2.1-.8-2.9"/><path fill="#139AD6" d="M12.7 28.1v.3c-.7 3.4-2.9 4.5-5.8 4.5H5.4c-.3 0-.6.3-.7.6l-1 6.1c0 .2.1.4.4.4h2.6c.3 0 .6-.2.6-.5v-.1l.5-3.1v-.2c0-.3.3-.5.6-.5h.4c2.5 0 4.5-1 5-4 .2-1.2.1-2.3-.5-3-.1-.2-.3-.4-.6-.5"/><path fill="#232C65" d="M12 27.8c-.1 0-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.4-.1-.8-.1-1.3-.1H6.2c-.1 0-.2 0-.3.1-.2.1-.3.3-.3.5l-.8 5.2v.2c.1-.3.4-.6.7-.6H7c2.9 0 5.1-1.2 5.8-4.5 0-.1 0-.2.1-.3-.2-.1-.3-.2-.5-.2-.3-.1-.3-.1-.4-.1"/></svg>
                            <svg className="mx-5" xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path fill="#FFB600" d="M63.5 32c0 10.4-8.4 18.9-18.9 18.9-10.4 0-18.9-8.5-18.9-18.9 0-10.4 8.4-18.9 18.8-18.9 10.6 0 19 8.5 19 18.9z"/><path fill="#F7981D" d="M44.6 13.1c10.4 0 18.9 8.5 18.9 18.9 0 10.4-8.4 18.9-18.9 18.9-10.4 0-18.9-8.5-18.9-18.9"/><path fill="#FF8500" d="M44.6 13.1c10.4 0 18.9 8.5 18.9 18.9 0 10.4-8.4 18.9-18.9 18.9"/><path fill="#FF5050" d="M19.2 13.1C8.9 13.2.5 21.6.5 32c0 10.4 8.4 18.9 18.9 18.9 4.9 0 9.3-1.9 12.7-4.9.7-.6 1.3-1.3 1.9-2h-3.9c-.5-.6-1-1.3-1.4-1.9h6.7c.4-.6.8-1.3 1.1-2h-8.9c-.3-.6-.6-1.3-.8-2h10.4c.6-1.9 1-3.9 1-6 0-1.4-.2-2.7-.4-4H26.2c.1-.7.3-1.3.5-2h10.4c-.2-.7-.5-1.4-.8-2h-8.8c.3-.7.7-1.3 1.1-2h6.7c-.4-.7-.9-1.4-1.5-2h-3.7c.6-.7 1.2-1.3 1.9-1.9-3.3-3.1-7.8-4.9-12.7-4.9 0-.2 0-.2-.1-.2z"/><path fill="#E52836" d="M.5 32c0 10.4 8.4 18.9 18.9 18.9 4.9 0 9.3-1.9 12.7-4.9.7-.6 1.3-1.3 1.9-2h-3.9c-.5-.6-1-1.3-1.4-1.9h6.7c.4-.6.8-1.3 1.1-2h-8.9c-.3-.6-.6-1.3-.8-2h10.4c.6-1.9 1-3.9 1-6 0-1.4-.2-2.7-.4-4H26.2c.1-.7.3-1.3.5-2h10.4c-.2-.7-.5-1.4-.8-2h-8.8c.3-.7.7-1.3 1.1-2h6.7c-.4-.7-.9-1.4-1.5-2h-3.7c.6-.7 1.2-1.3 1.9-1.9-3.3-3.1-7.8-4.9-12.7-4.9h-.1"/><path fill="#CB2026" d="M19.4 50.9c4.9 0 9.3-1.9 12.7-4.9.7-.6 1.3-1.3 1.9-2h-3.9c-.5-.6-1-1.3-1.4-1.9h6.7c.4-.6.8-1.3 1.1-2h-8.9c-.3-.6-.6-1.3-.8-2h10.4c.6-1.9 1-3.9 1-6 0-1.4-.2-2.7-.4-4H26.2c.1-.7.3-1.3.5-2h10.4c-.2-.7-.5-1.4-.8-2h-8.8c.3-.7.7-1.3 1.1-2h6.7c-.4-.7-.9-1.4-1.5-2h-3.7c.6-.7 1.2-1.3 1.9-1.9-3.3-3.1-7.8-4.9-12.7-4.9h-.1"/><path fill="#FFF" d="m26.1 36.8.3-1.7c-.1 0-.3.1-.5.1-.7 0-.8-.4-.7-.6l.6-3.5h1.1l.3-1.9h-1l.2-1.2h-2s-1.2 6.6-1.2 7.4c0 1.2.7 1.7 1.6 1.7.6 0 1.1-.2 1.3-.3zM26.8 33.6c0 2.8 1.9 3.5 3.5 3.5 1.5 0 2.1-.3 2.1-.3l.4-1.9s-1.1.5-2.1.5c-2.2 0-1.8-1.6-1.8-1.6H33s.3-1.3.3-1.8c0-1.3-.7-2.9-2.9-2.9-2.1-.2-3.6 2-3.6 4.5zm3.5-2.9c1.1 0 .9 1.3.9 1.4H29c0-.1.2-1.4 1.3-1.4zM43 36.8l.4-2.2s-1 .5-1.7.5c-1.4 0-2-1.1-2-2.3 0-2.4 1.2-3.7 2.6-3.7 1 0 1.8.6 1.8.6l.3-2.1s-1.2-.5-2.3-.5c-2.3 0-4.6 2-4.6 5.8 0 2.5 1.2 4.2 3.6 4.2.8 0 1.9-.3 1.9-.3zM15.1 28.9c-1.4 0-2.4.4-2.4.4l-.3 1.7s.9-.4 2.2-.4c.7 0 1.3.1 1.3.7 0 .4-.1.5-.1.5h-.9c-1.7 0-3.6.7-3.6 3 0 1.8 1.2 2.2 1.9 2.2 1.4 0 2-.9 2.1-.9l-.1.8H17l.8-5.5c0-2.4-2-2.5-2.7-2.5zm.4 4.5c0 .3-.2 1.9-1.4 1.9-.6 0-.8-.5-.8-.8 0-.5.3-1.2 1.8-1.2.3.1.4.1.4.1zM19.7 37c.5 0 3 .1 3-2.6 0-2.5-2.4-2-2.4-3 0-.5.4-.7 1.1-.7.3 0 1.4.1 1.4.1l.3-1.8s-.7-.2-1.9-.2c-1.5 0-3 .6-3 2.6 0 2.3 2.5 2.1 2.5 3 0 .6-.7.7-1.2.7-.9 0-1.8-.3-1.8-.3l-.3 1.8c.1.2.6.4 2.3.4zM59.6 27.3l-.4 2.7s-.8-1-1.9-1c-1.8 0-3.4 2.2-3.4 4.8 0 1.6.8 3.3 2.5 3.3 1.2 0 1.9-.8 1.9-.8l-.1.7h2l1.5-9.6-2.1-.1zm-.9 5.3c0 1.1-.5 2.5-1.6 2.5-.7 0-1.1-.6-1.1-1.6 0-1.6.7-2.6 1.6-2.6.7 0 1.1.5 1.1 1.7zM4.2 36.9l1.2-7.2.2 7.2H7l2.6-7.2-1.1 7.2h2.1l1.6-9.6H8.9l-2 5.9-.1-5.9H3.9l-1.6 9.6h1.9zM35.2 36.9c.6-3.3.7-6 2.1-5.5.2-1.3.5-1.8.7-2.3h-.4c-.9 0-1.6 1.2-1.6 1.2l.2-1.1h-1.9L33 37h2.2zM47.6 28.9c-1.4 0-2.4.4-2.4.4l-.3 1.7s.9-.4 2.2-.4c.7 0 1.3.1 1.3.7 0 .4-.1.5-.1.5h-.9c-1.7 0-3.6.7-3.6 3 0 1.8 1.2 2.2 1.9 2.2 1.4 0 2-.9 2.1-.9l-.1.8h1.8l.8-5.5c.1-2.4-2-2.5-2.7-2.5zm.5 4.5c0 .3-.2 1.9-1.4 1.9-.6 0-.8-.5-.8-.8 0-.5.3-1.2 1.8-1.2.3.1.3.1.4.1zM52 36.9c.6-3.3.7-6 2.1-5.5.2-1.3.5-1.8.7-2.3h-.4c-.9 0-1.6 1.2-1.6 1.2l.2-1.1h-1.9L49.8 37H52z"/><path fill="#DCE5E5" d="M23 35.4c0 1.2.7 1.7 1.6 1.7.7 0 1.3-.2 1.5-.3l.3-1.7c-.1 0-.3.1-.5.1-.7 0-.8-.4-.7-.6l.6-3.5h1.1l.3-1.9h-1l.2-1.2M27.8 33.6c0 2.8.9 3.5 2.5 3.5 1.5 0 2.1-.3 2.1-.3l.4-1.9s-1.1.5-2.1.5c-2.2 0-1.8-1.6-1.8-1.6H33s.3-1.3.3-1.8c0-1.3-.7-2.9-2.9-2.9-2.1-.2-2.6 2-2.6 4.5zm2.5-2.9c1.1 0 1.3 1.3 1.3 1.4H29c0-.1.2-1.4 1.3-1.4zM43 36.8l.4-2.2s-1 .5-1.7.5c-1.4 0-2-1.1-2-2.3 0-2.4 1.2-3.7 2.6-3.7 1 0 1.8.6 1.8.6l.3-2.1s-1.2-.5-2.3-.5c-2.3 0-3.6 2-3.6 5.8 0 2.5.2 4.2 2.6 4.2.8 0 1.9-.3 1.9-.3zM12.4 31.1s.9-.4 2.2-.4c.7 0 1.3.1 1.3.7 0 .4-.1.5-.1.5h-.9c-1.7 0-3.6.7-3.6 3 0 1.8 1.2 2.2 1.9 2.2 1.4 0 2-.9 2.1-.9l-.1.8H17l.8-5.5c0-2.3-2-2.4-2.8-2.4m1.5 4.3c0 .3-1.2 1.9-2.4 1.9-.6 0-.8-.5-.8-.8 0-.5.3-1.2 1.8-1.2.3.1 1.4.1 1.4.1zM17.5 36.8s.6.2 2.3.2c.5 0 3 .1 3-2.6 0-2.5-2.4-2-2.4-3 0-.5.4-.7 1.1-.7.3 0 1.4.1 1.4.1l.3-1.8s-.7-.2-1.9-.2c-1.5 0-2 .6-2 2.6 0 2.3 1.5 2.1 1.5 3 0 .6-.7.7-1.2.7M59.2 30s-.8-1-1.9-1c-1.8 0-2.4 2.2-2.4 4.8 0 1.6-.2 3.3 1.5 3.3 1.2 0 1.9-.8 1.9-.8l-.1.7h2l1.5-9.6m-2.6 5.2c0 1.1-.9 2.5-2 2.5-.7 0-1.1-.6-1.1-1.6 0-1.6.7-2.6 1.6-2.6.7 0 1.5.5 1.5 1.7zM4.2 36.9l1.2-7.2.2 7.2H7l2.6-7.2-1.1 7.2h2.1l1.6-9.6H9.7l-2.8 5.9-.1-5.9H5.7l-3.4 9.6h1.9zM33.1 36.9h2.1c.6-3.3.7-6 2.1-5.5.2-1.3.5-1.8.7-2.3h-.4c-.9 0-1.6 1.2-1.6 1.2l.2-1.1M44.9 31.1s.9-.4 2.2-.4c.7 0 1.3.1 1.3.7 0 .4-.1.5-.1.5h-.9c-1.7 0-3.6.7-3.6 3 0 1.8 1.2 2.2 1.9 2.2 1.4 0 2-.9 2.1-.9l-.1.8h1.8l.8-5.5c0-2.3-2-2.4-2.8-2.4m1.5 4.3c0 .3-1.2 1.9-2.4 1.9-.6 0-.8-.5-.8-.8 0-.5.3-1.2 1.8-1.2.4.1 1.4.1 1.4.1zM49.9 36.9H52c.6-3.3.7-6 2.1-5.5.2-1.3.5-1.8.7-2.3h-.4c-.9 0-1.6 1.2-1.6 1.2l.2-1.1"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height={40} enableBackground="new 0 0 64 64" viewBox="0 0 64 64"><path fill="#e38900" d="M47.4,17.3c0,0.5,0,0.9-0.1,1.3c0,0.3-0.1,0.7-0.1,1c-0.5,3.4-1.9,6.5-4,9H36c3.4-1.8,5.9-5.1,6.6-9c0.1-0.3,0.1-0.7,0.2-1c0-0.4,0.1-0.9,0.1-1.3c0-7.1-5.7-12.8-12.8-12.8c-7.1,0-12.8,5.7-12.8,12.8c0,0.8,0.1,1.6,0.2,2.4c0.7,3.9,3.2,7.2,6.6,9H17c-2.1-2.5-3.6-5.5-4-9c-0.1-0.3-0.1-0.7-0.1-1c0-0.4-0.1-0.9-0.1-1.3C12.8,7.8,20.5,0,30.1,0C39.6,0,47.4,7.8,47.4,17.3z"/><path fill="#e0ae55" d="M57.5 18.6v10H43.2c2.1-2.5 3.6-5.5 4-9 .1-.3.1-.7.1-1H57.5zM17 28.6H7.6c-2.6 0-4.8-2.1-4.9-4.7 0-.1 0-.2 0-.3 0-1.4.6-2.6 1.5-3.5.9-.9 2.1-1.5 3.5-1.5h5.2c0 .3.1.7.1 1C13.4 23.1 14.8 26.1 17 28.6z"/><path fill="#a07850" d="M61.3,41.6v10.2h-8.9c-2.8,0-5.1-2.3-5.1-5.1c0-1.4,0.6-2.7,1.5-3.6c0.9-0.9,2.2-1.5,3.6-1.5H61.3z"/><path fill="#ffde17" d="M42.9,17.3c0,0.4,0,0.9-0.1,1.3c0,0.3-0.1,0.7-0.2,1c-0.7,3.9-3.2,7.2-6.6,9H24.1c-3.4-1.8-5.9-5.1-6.6-9c-0.2-0.8-0.2-1.5-0.2-2.4c0-7.1,5.7-12.8,12.8-12.8C37.1,4.5,42.9,10.3,42.9,17.3z"/><path fill="#bf8e5f" d="M48.9,43.1c-0.9,0.9-1.5,2.2-1.5,3.6c0,2.8,2.3,5.1,5.1,5.1h8.9v10.9c0,0.7-0.6,1.3-1.3,1.3H10.5c-4.3,0-7.9-3.5-7.9-7.9V23.9h0c0.1,2.6,2.3,4.7,4.9,4.7h49.2l0,0H60c0.7,0,1.3,0.6,1.3,1.3v11.7h-8.9C51,41.6,49.8,42.2,48.9,43.1z"/><path fill="#fc6" d="M55.3,46.7c0,1.4-1.1,2.5-2.5,2.5c-1.4,0-2.5-1.1-2.5-2.5c0-1.4,1.1-2.5,2.5-2.5C54.2,44.2,55.3,45.3,55.3,46.7z"/><path fill="#e38900" d="M33.8,16.8c0.6-0.6,1-1.5,1-2.4c0-1.2-0.5-2.2-1.3-2.8c-0.6-0.5-1.4-0.8-2.4-1v-1c0-0.6-0.4-1-1-1c-0.6,0-1,0.4-1,1v0.9c-0.8,0-1.6,0.1-2.2,0.2c-0.5,0.1-0.8,0.5-0.8,1v11.1c0,0.5,0.4,0.9,0.9,1c0.4,0,1.1,0.1,2.1,0.1v0.9c0,0.6,0.4,1,1,1c0.6,0,1-0.4,1-1v-1c1.2-0.2,2.2-0.6,2.9-1.2c0.8-0.8,1.3-1.8,1.3-3C35.2,18.4,34.6,17.4,33.8,16.8z M28.1,12.7c0.5-0.1,1.1-0.1,1.7-0.1c1.2,0,1.9,0.2,2.5,0.6c0.4,0.3,0.5,0.7,0.5,1.2c0,0.6-0.4,1.2-1.1,1.5h-3.6V12.7z M32.5,21.2C32,21.8,30.9,22,29.3,22c-0.5,0-0.9,0-1.3,0v-4.1h3.5c0,0,0,0,0,0c0.3,0.1,1.6,0.5,1.6,1.9C33.2,20.3,33,20.8,32.5,21.2z"/></svg>
                        </div>
                        <div className="copyright">
                            <p>All content on this website is the property of IPTV Provider and may not be used without permission.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
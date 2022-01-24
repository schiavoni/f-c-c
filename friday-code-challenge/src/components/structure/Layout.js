/*
Vision
Any page should have some layout to simplify changing classes and managing long term styles

UT
Check if the props are set
*/

function Layout(props) {
    return (
        <div className="App">{props.children}</div>
    )
}
export default Layout;
function male ()
{
    document.getElementById( "gender" ).innerHTML = 'Male'
    document.getElementById( "femaleImg" ).src = 'https://static.cure.fit/assets/images/female-inactive.svg'
    document.getElementById( "maleImg" ).src = 'https://static.cure.fit/assets/images/male-active.svg'

}
function female ()
{
    document.getElementById( "gender" ).innerHTML = 'Female'
    document.getElementById( "maleImg" ).src = 'https://static.cure.fit/assets/images/male-inactive.svg'
    document.getElementById( "femaleImg" ).src = 'https://static.cure.fit/assets/images/female-active.svg'

}
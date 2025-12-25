


//  ****************************************************************  //
//  Header
//  ****************************************************************  //

const header = document.getElementById('header');

const headerHtmlCode = `
    <!-- resume header with your name and title -->
    <h1>Noman Hasan</h1>
    <hr>
    <h2 style="font-weight: bold;">Senior Staff Engineer </h2>
    <h2 style="font-weight: 450; color: #536464ff;">Fluid/Thermal Simulation <b>||</b> High Throughput Simulation with Automation <br> Process/Performance Modeling <b>||</b> Data Analysis & Modeling</h2>
    <h3 style="font-weight: bold; font-size: 15px; color: #282929;">Building virtual capability for an efficient future</h3>
    <hr>
`;

if (header) {
    header.innerHTML = headerHtmlCode;
}


//  ****************************************************************  //
//  Navigation
//  ****************************************************************  //

const navigationBar = document.getElementById('navigation-bar');

const navBarHtmlCode = `
    <nav >
        <ul id="nav-list" class="container">
            <li>
                <a href="/index.html">RESUME</a>
            </li>
            <li>
                <a href="/portfolio.html">PORTFOLIO</a>
            </li>
        </ul>
    </nav>
`;

if (navigationBar) {
    navigationBar.innerHTML = navBarHtmlCode;
}


//  ****************************************************************  //
//  Job Description - Position and Tenure
//  ****************************************************************  //

const jobPositionEntries = document.querySelectorAll('.job-position');

jobPositionEntries.forEach(position => {

    position.innerHTML = `
        <table>
            <tr class="table-text">
                <td style="width: 250px;">
                    ${position.getAttribute('position-name')}
                </td>
                <td>
                    &nbsp;&nbsp; | &nbsp;&nbsp;
                </td>
                <td>
                    ${position.getAttribute('position-tenure')}
                </td>
            </tr>
        </table>
    `;
});







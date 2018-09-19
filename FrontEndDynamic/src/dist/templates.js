angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/about-us.html',
    '	\n' +
    '	\n' +
    '	<!--HEADER SECTION-->\n' +
    '	<section>\n' +
    '	\n' +
    '		<!--TOP SECTION-->\n' +
    '		<div class="inn-banner" style="background: url(http://mezab-al-rahma.azurewebsites.net/api/Templates/{{home.templateId}}/Image) no-repeat">\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<h4>{{\'AboutUs\' | translate}}</h4>\n' +
    '					\n' +
    '					<ul>\n' +
    '						<li><a href="#">{{\'Home\'| translate}}</a>\n' +
    '						</li>\n' +
    '						<li><a href="#">{{\'AboutUs\' | translate}}</a>\n' +
    '						</li>\n' +
    '					</ul>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="inn-body-section">\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<div class="page-head">\n' +
    '						<!-- <h2>{{aboutUs.headerDictionary[selectedLanguage]}}</h2> -->\n' +
    '						<h2>{{\'AboutUs\' | translate}}</h2>\n' +
    '						<div></div>\n' +
    '						<div class="head-title">\n' +
    '							<div class="hl-1"></div>\n' +
    '							<div class="hl-2"></div>\n' +
    '							<div class="hl-3"></div>\n' +
    '						</div>\n' +
    '						<p>{{aboutUs.titleDictionary[selectedLanguage]}}</p>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				<div class="row">\n' +
    '					<div class="col-md-6">\n' +
    '						<div class="about-left">\n' +
    '							<h2>{{aboutUs.subTitleDictionary[selectedLanguage]}}<span> {{aboutUs.titleColoredDictionary[selectedLanguage]}}</span></h2>\n' +
    '							<h4>{{aboutUs.boldArticleDictionary[selectedLanguage]}}</h4>\n' +
    '							<p>{{aboutUs.descriptionDictionary[selectedLanguage]}}</p>\n' +
    '							<a>{{\'Mobile\' | translate}} {{contactUs.companyNumber}}</a> </div>\n' +
    '					</div>\n' +
    '					<div class="col-md-6">\n' +
    '						<div class="about-right"> <img ng-src="http://mezab-al-rahma.azurewebsites.net/api/Templates/{{aboutUs.templateId}}/Image" alt=""> </div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<!--TOP SECTION-->\n' +
    '		\n' +
    '	</section>\n' +
    '	<!--END HEADER SECTION-->\n' +
    '\n' +
    '	<!--ALL SCRIPT FILES-->\n' +
    '	<!-- <script src="js/jquery.min.js"></script>\n' +
    '	<script src="js/jquery-ui.js"></script>\n' +
    '	<script src="js/angular.min.js"></script>\n' +
    '	<script src="js/bootstrap.js" type="text/javascript"></script>\n' +
    '	<script src="js/materialize.min.js" type="text/javascript"></script>\n' +
    '	<script src="js/jquery.mixitup.min.js" type="text/javascript"></script>\n' +
    '	<script src="js/custom.js"></script> -->\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/contact-us.html',
    '\n' +
    '	<!--HEADER SECTION-->\n' +
    '	<section>\n' +
    '	\n' +
    '		<!--TOP SECTION-->\n' +
    '		<div class="inn-banner" style="background: url(http://mezab-al-rahma.azurewebsites.net/api/Templates/{{home.templateId}}/Image) no-repeat">		\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<h4>{{\'ContactUs\' | translate}}</h4>\n' +
    '					\n' +
    '					<ul>\n' +
    '						<li><a href="#">{{\'Home\'| translate}}</a>\n' +
    '						</li>\n' +
    '						<li><a href="#">{{\'ContactUs\' | translate}}</a>\n' +
    '						</li>\n' +
    '					</ul>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="inn-body-section">\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<div class="page-head">\n' +
    '						<h2>{{\'ContactUs\' | translate}}</h2>\n' +
    '						<div class="head-title">\n' +
    '							<div class="hl-1"></div>\n' +
    '							<div class="hl-2"></div>\n' +
    '							<div class="hl-3"></div>\n' +
    '						</div>\n' +
    '						<!-- <p>Quisque at volutpat nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p> -->\n' +
    '					</div>\n' +
    '				</div>\n' +
    '				\n' +
    '				<div class="row">\n' +
    '					<div class="col-md-6 col-sm-9 col-xs-12 new-con rtlCLass">\n' +
    '						<div ng-show ="contactUs.showEmail == true">\n' +
    '							<h2><span>{{\'Email\' | translate}}</span>{{contactUs.email}}</h2>\n' +
    '						</div>\n' +
    '						<div ng-show ="contactUs.showOwnerEmail == true">\n' +
    '							<h2><span>{{\'Email\' | translate}}</span>{{contactUs.ownerEmail}}</h2>\n' +
    '						</div>\n' +
    '						<div ng-show ="contactUs.showWhatsApp == true">\n' +
    '							<h2><span>{{\'WhatsApp\' | translate}}</span>{{contactUs.whatsAppNumber}}</h2>\n' +
    '						</div>\n' +
    '						<div ng-show ="contactUs.showMobile == true">\n' +
    '							<h2><span>{{\'Mobile\' | translate}}</span>{{contactUs.companyNumber}}</h2>\n' +
    '						</div>\n' +
    '					</div>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="row">\n' +
    '			<div class="contact-map">\n' +
    '				<iframe ng-src="{{hotelLocationUrl}}" allowfullscreen></iframe>\n' +
    '				<!-- <iframe ng-src="{{contactUs.location}}" allowfullscreen></iframe>				 -->\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<!--TOP SECTION-->\n' +
    '\n' +
    '	</section>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/home.html',
    '\n' +
    '<!--HEADER SECTION-->\n' +
    '<section class="main" ng-style="style()">\n' +
    '	<!--TOP SECTION-->\n' +
    '	<div class="hom-body-section">\n' +
    '		<div class="container">\n' +
    '			<div class="row">\n' +
    '				<div class="home-bod">\n' +
    '					<div class="home-bod-1">\n' +
    '						<h4><span>{{home.coloredTitleDictionary[selectedLanguage]}}</span> {{home.titleDictionary[selectedLanguage]}}</h4>\n' +
    '						<h2>{{home.subTitleDictionary[selectedLanguage]}}</h2>\n' +
    '						<p>{{home.descriptionDictionary[selectedLanguage]}}</p>\n' +
    '					</div>\n' +
    '					\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '	<!--TOP SECTION-->\n' +
    '</section>\n' +
    '<!--END HEADER SECTION-->\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/leadership.html',
    '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '\n' +
    '<head>\n' +
    '	<title>Mezab Al-Rahma</title>\n' +
    '	<!-- META TAGS -->\n' +
    '	<meta charset="utf-8">\n' +
    '	<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '	<!-- FAV ICON(BROWSER TAB ICON) -->\n' +
    '	<link rel="shortcut icon" href="images/fav.ico" type="image/x-icon">\n' +
    '	<!-- GOOGLE FONT -->\n' +
    '	<link href="https://fonts.googleapis.com/css?family=Poppins%7CQuicksand:500,700" rel="stylesheet">\n' +
    '	<!-- FONTAWESOME ICONS -->\n' +
    '	<link rel="stylesheet" href="css/font-awesome.min.css">\n' +
    '	<!-- ALL CSS FILES -->\n' +
    '	<link href="css/materialize.css" rel="stylesheet">\n' +
    '	<link href="css/style.css" rel="stylesheet">\n' +
    '	<link href="css/bootstrap.css" rel="stylesheet" type="text/css" />\n' +
    '	<!-- RESPONSIVE.CSS ONLY FOR MOBILE AND TABLET VIEWS -->\n' +
    '	<link href="css/responsive.css" rel="stylesheet">\n' +
    '	<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->\n' +
    '	<!-- WARNING: Respond.js doesn\'t work if you view the page via file:// -->\n' +
    '	<!--[if lt IE 9]>\n' +
    '	<script src="js/html5shiv.js"></script>\n' +
    '	<script src="js/respond.min.js"></script>\n' +
    '	<![endif]-->\n' +
    '\n' +
    '</head>\n' +
    '\n' +
    '<body data-ng-app="">\n' +
    '	<!--HEADER SECTION-->\n' +
    '	<section>\n' +
    '		<!--TOP BANNER-->\n' +
    '		<div class="inn-banner" style="background: url(http://mezab-al-rahma.azurewebsites.net/api/Templates/{{home.templateId}}/Image) no-repeat">		\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<h4>{{\'Leadership\'| translate}}</h4>\n' +
    '					<!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. -->\n' +
    '						<p>\n' +
    '							<ul>\n' +
    '								<li><a href="#">{{\'Home\'| translate}}</a>\n' +
    '								</li>\n' +
    '								<li><a href="#">{{\'Leadership\'| translate}}</a>\n' +
    '								</li>\n' +
    '							</ul>\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<!--TOP SECTION-->\n' +
    '		<div class="inn-body-section pad-bot-55">\n' +
    '			<div class="container">\n' +
    '				<div class="row">\n' +
    '					<div class="page-head">\n' +
    '						<h2>{{\'Leadership\'| translate}}</h2>\n' +
    '						<div class="head-title">\n' +
    '							<div class="hl-1"></div>\n' +
    '							<div class="hl-2"></div>\n' +
    '							<div class="hl-3"></div>\n' +
    '						</div>\n' +
    '						<!-- <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p> -->\n' +
    '					</div>\n' +
    '					<!--TYPOGRAPHY SECTION-->\n' +
    '					<div class="col-md-8 rtlCLass">\n' +
    '						<div class="head-typo typo-com">\n' +
    '							<h2>{{\'LeadershipTeam\' | translate}}</h2>\n' +
    '							<!-- <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. </p> -->\n' +
    '							<!--EVENT-->\n' +
    '							<div class="aminities">\n' +
    '								<ul>\n' +
    '									<div ng-repeat="member in leadership">\n' +
    '											<li class="aminities-line"> <i class="fa fa-map-marker" aria-hidden="true"></i>\n' +
    '												<div class="row amini-body">\n' +
    '													<div class="col-md-4"> <img ng-src="http://mezab-al-rahma.azurewebsites.net/api/Templates/{{member.templateId}}/Image" alt="" /> </div>\n' +
    '													<!-- <div class="col-md-4"> <img ng-src="localhost:9091/img/ami/{{member.templateId}}.jpg" alt="" /> </div> -->\n' +
    '													<div class="col-md-8">\n' +
    '														<h4>{{member.titleDictionary[selectedLanguage]}}</h4>\n' +
    '														<p>{{member.descriptionDictionary[selectedLanguage]}}</p>\n' +
    '													</div>\n' +
    '												</div>\n' +
    '											</li>\n' +
    '									</div>\n' +
    '									\n' +
    '								</ul>\n' +
    '							</div>\n' +
    '							<!--END EVENT-->\n' +
    '						</div>\n' +
    '					</div>\n' +
    '					<div class="col-md-4">\n' +
    '						<!-- <div class="head-typo typo-com">\n' +
    '							<h2>One Column</h2>\n' +
    '							<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. </p>\n' +
    '						</div> -->\n' +
    '					</div>\n' +
    '					<!--END TYPOGRAPHY SECTION-->\n' +
    '				</div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<!--TOP SECTION-->\n' +
    '\n' +
    '	</section>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/user/templates/searchUser.html',
    '<script type="text/javascript">\n' +
    '	$(document).ready(function() {\n' +
    '        $(".select-with-search").select2({\n' +
    '			theme: "bootstrap"\n' +
    '		});\n' +
    '	});\n' +
    '</script>\n' +
    '\n' +
    '<div class="modal-body">\n' +
    '    <h2 class="pmd-card-title-text">{{\'user\' | translate}}</h2>\n' +
    '    <br>\n' +
    '    <form class="form-horizontal" name="newUserForm">\n' +
    '        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '            <label for="first-name">{{\'SelectUser\' | translate}}</label>\n' +
    '            <select style="width:100% !important" class="form-control select-with-search pmd-select2" \n' +
    '            ng-model="searchUserCtrl.selectedUser"\n' +
    '            ng-options="user as user.userFirstName for user in searchUserCtrl.userList">\n' +
    '            </select>\n' +
    '         </div>\n' +
    '\n' +
    '    </form>\n' +
    '    <!-- <p>{{searchUserCtrl.selectedUser}}</p> -->\n' +
    '    \n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CodeLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userCode">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'FirstNameLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userFirstName">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'SecondNameLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userSecondName">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'FamilyNameLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userFamilyName">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'NationalityLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userNationality">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'JobLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userJob">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CountryLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userCountry">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'CityLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userCity">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'MobileNumberLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userMobile">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'EmailLbl\' | translate}}</label>\n' +
    '        <input disabled type="text" class="mat-input form-control pmd-textfield-floating-label" ng-model="searchUserCtrl.selectedUser.userEmail">\n' +
    '        \n' +
    '    </div>\n' +
    '\n' +
    '    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '        <label for="first-name">{{\'GenderLbl\' | translate}}</label>\n' +
    '        <br>\n' +
    '        <div class="mat-input form-control pmd-textfield-floating-label" ng-if="searchUserCtrl.selectedUser.userGender == 1">{{\'MaleLbl\' | translate}}</div>\n' +
    '        <div class="mat-input form-control pmd-textfield-floating-label" ng-if="searchUserCtrl.selectedUser.userGender == 0">{{\'FemaleLbl\' | translate}}</div>\n' +
    '        \n' +
    '\n' +
    '    </div>\n' +
    '\n' +
    '    </div>');
}]);

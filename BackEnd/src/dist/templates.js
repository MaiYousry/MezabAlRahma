angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/aboutUs/templates/aboutUs.html',
    '\n' +
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-show="flag == 0" ng-click="aboutUsCtrl.AddAboutUs()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="flag == 0">\n' +
    '        <span>{{\'NoAboutUsAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if=" aboutUsList.results.length >0">\n' +
    '            <!-- {{aboutUsList.results}} -->\n' +
    '        <div class="table-responsive">\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <!-- <th>{{\'Header\' | translate}}</th> -->\n' +
    '                        <th>{{\'Title\' | translate}}</th>\n' +
    '                        <th>{{\'SubTitle\' | translate}}</th>\n' +
    '                        <th>{{\'TitleColored\' | translate}}</th>\n' +
    '                        <th>{{\'BoldArticle\' | translate}}</th>\n' +
    '                        <th>{{\'Description\' | translate}}</th>\n' +
    '                        <th>{{\'Template\' | translate}}</th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="aboutUs in aboutUsList.results">\n' +
    '                        <!-- <td  data-title="Name" width="20%">{{aboutUs.headerDictionary[selectedLanguage]}}</td> -->\n' +
    '                        <td  data-title="Name" width="20%">{{aboutUs.titleDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{aboutUs.subTitleDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{aboutUs.titleColoredDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{aboutUs.boldArticleDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{aboutUs.descriptionDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{(currencyList | filter : {currencyId:aboutUs.currencyTypeId})[0].titleDictionary[selectedLanguage] | limitTo: 10 }}\n' +
    '                        </td>\n' +
    '                        <!-- <td  data-title="Name" width="20%">{{aboutUs.templateId}}</td> -->\n' +
    '                   \n' +
    '                           <td data-title="Image">\n' +
    '                               <img ng-src="{{(templateList | filter : {templateId:aboutUs.templateId})[0].templateURL}}" alt="{{(templateList | filter : {templateId:aboutUs.templateId})[0].templateName}}" style="max-height: 200px;max-width: 200px;"/>\n' +
    '                            </td>\n' +
    '                        \n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" width="15%">\n' +
    '                            <i class="cursorPointer" ng-click="aboutUsCtrl.UpdateAboutUs(aboutUs)">{{\'Edit\' | translate}} </i>\n' +
    '                            <!-- <i class="cursorPointer" ng-click="aboutUsCtrl.DeleteTemplate(aboutUs.aboutUsId)">{{\'deleteBtn\' | translate}} </i> -->\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div style="text-align:center;" paging page="1" page-size="10" total="aboutUsList.totalCount" paging-action="aboutUsCtrl.changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/aboutUs/templates/addAboutUs.html',
    '<style>\n' +
    '    .constrained {\n' +
    '    margin: 10px;\n' +
    '    padding: 10px;\n' +
    '    height: 200px;\n' +
    '    overflow: auto;\n' +
    '    border: 1px solid lightgray;\n' +
    '    background-color: white\n' +
    '}\n' +
    '\n' +
    '</style>\n' +
    '\n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <button class="close" type="button" ng-click="addAboutUsCtrl.close()">×</button>\n' +
    '        <h2 class="pmd-card-title-text">{{\'AddAboutUsLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '            \n' +
    '        <form class="form-horizontal" name="newAboutUsForm">\n' +
    '            <div> \n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name">{{\'Header\' | translate}}</label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="headerDictionary{{lang.value+\'Header\'}}" ng-pattern="/^(\\D)+$/" ng-model="addAboutUsCtrl.HeaderDictionary[lang.key]" ng-minlength="2" ng-maxlength="80">\n' +
    '                                    <div ng-messages="newAboutUsForm.headerDictionary{{lang.value+\'Header\'}}.$error" class="error">\n' +
    '                                            <div ng-show="newAboutUsForm.headerDictionary{{lang.value+\'Header\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                            <div ng-show="newAboutUsForm.headerDictionary{{lang.value+\'Header\'}}.$error.required && !newAboutUsForm.headerDictionary{{lang.value+\'Header\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="newAboutUsForm.headerDictionary{{lang.value+\'Header\'}}.$error.minlength || newAboutUsForm.headerDictionary{{lang.value+\'Header\'}}.$error.maxlength">{{\'NameLengthError80\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div> -->\n' +
    '                                \n' +
    '                                 <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-model="addAboutUsCtrl.TitleDictionary[lang.key]" ng-minlength="2" ng-maxlength="80">\n' +
    '                                    <div ng-messages="newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                            <!-- <div ng-show="newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                            <div ng-show="newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$error.required && !newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div> \n' +
    '                                            <div ng-show="newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError80\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div> \n' +
    '\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name">{{\'SubTitle\' | translate}}</label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="subTitleDictionary{{lang.value+\'SubTitle\'}}" ng-model="addAboutUsCtrl.SubTitleDictionary[lang.key]" ng-minlength="2" ng-maxlength="16">\n' +
    '                                    <div ng-messages="newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$error" class="error">\n' +
    '                                            <!-- <div ng-show="newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                            <div ng-show="newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$error.required && !newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$error.minlength || newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$error.maxlength">{{\'NameLengthError16\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name">{{\'TitleColored\' | translate}}</label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleColoredDictionary{{lang.value+\'TitleColored\'}}" ng-model="addAboutUsCtrl.TitleColoredDictionary[lang.key]" ng-minlength="2" ng-maxlength="16">\n' +
    '                                    <div ng-messages="newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$error" class="error">\n' +
    '                                            <!-- <div ng-show="newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                            <div ng-show="newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$error.required && !newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$error.minlength || newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$error.maxlength">{{\'NameLengthError16\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name">{{\'BoldArticle\' | translate}}</label>\n' +
    '                                    <input required type="text" class="mat-input form-control" name="boldArticleDictionary{{lang.value+\'BoldArticle\'}}" ng-pattern="/^(\\D)+$/" ng-model="addAboutUsCtrl.BoldArticleDictionary[lang.key]" ng-minlength="2" ng-maxlength="120">\n' +
    '                                    <div ng-messages="newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$error" class="error">\n' +
    '                                            <!-- <div ng-show="newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                            <div ng-show="newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$error.required && !newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$error.minlength || newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$error.maxlength">{{\'NameLengthError120\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name">{{\'Description\' | translate}}</label>\n' +
    '                                    <textarea required type="text" class="mat-input form-control" name="discriptionDictionary{{lang.value+\'Discription\'}}" ng-model="addAboutUsCtrl.DescriptionDictionary[lang.key]" ng-minlength="2" ng-maxlength="700">\n' +
    '                                    </textarea>\n' +
    '                                    <div ng-messages="newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error" class="error">\n' +
    '                                        <!-- <div ng-show="newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                        <div ng-show="newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.required && !newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.minlength || newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.maxlength">{{\'NameLengthError700\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '\n' +
    '            <hr>\n' +
    '\n' +
    '            <label for="first-name">{{\'Template\' | translate}}</label>\n' +
    '            <div class="constrained">\n' +
    '                <div ng-repeat="template in templateList.results">\n' +
    '                    <label>\n' +
    '                        <input type="radio" ng-model="template.templateId" ng-change="changeId(template.templateId)"  value="{{template.templateId}}" name="template"/>\n' +
    '                        <img ng-src="{{template.templateURL}}" style="height: 200px;width: 150px;"/>\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '                <div style="text-align:center;" paging page="1" page-size="10" total="templateList.totalCount" paging-action="addAboutUsCtrl.changePage(page)"\n' +
    '                    flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            \n' +
    '        </form>\n' +
    '\n' +
    '       \n' +
    '        \n' +
    '\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="newAboutUsForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewAboutUs()">{{\'SaveAndExitBtn\' | translate}}</button>\n' +
    '            <!-- <button ng-disabled="newAboutUsForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewContactMore()">{{\'AddMoreBtn\' | translate}}</button> -->\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/aboutUs/templates/editAboutUs.html',
    '<style>\n' +
    '    .constrained {\n' +
    '    margin: 10px;\n' +
    '    padding: 10px;\n' +
    '    height: 200px;\n' +
    '    overflow: auto;\n' +
    '    border: 1px solid lightgray;\n' +
    '    background-color: white\n' +
    '}\n' +
    '\n' +
    '</style>\n' +
    '\n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <button class="close" type="button" ng-click="updateAboutUsCtrl.close()">×</button>\n' +
    '        <h2 class="pmd-card-title-text">{{\'UpdateAboutUsLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '            <form class="form-horizontal" name="newAboutUsForm">\n' +
    '                    <div> \n' +
    '                        <ul class="nav nav-tabs" role="tablist">\n' +
    '                            <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                                <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                    {{lang.value | translate}}\n' +
    '                                </a>\n' +
    '                            </li> \n' +
    '                        </ul>\n' +
    '                        <div class="pmd-card">\n' +
    '                            <div class="pmd-card-body">\n' +
    '                                <!-- Tab panes -->\n' +
    '                                <div class="tab-content">\n' +
    '                                    <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                        <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'Header\' | translate}}</label>\n' +
    '                                            <input type="text" class="mat-input form-control" name="headerDictionary{{lang.value+\'Header\'}}" ng-pattern="/^(\\D)+$/" ng-model="aboutUsObj.headerDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                            <div ng-messages="newAboutUsForm.headerDictionary{{lang.value+\'Header\'}}.$error" class="error">\n' +
    '                                                    <div ng-show="newAboutUsForm.headerDictionary{{lang.value+\'Header\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                    <!-- <div ng-if="newAboutUsForm.discription.$error.required && !newAboutUsForm.discription.$pristine">{{\'requiredErr\' | translate}}</div> \n' +
    '                                                    <div ng-show="newAboutUsForm.headerDictionary{{lang.value+\'Header\'}}.$error.minlength || newAboutUsForm.headerDictionary{{lang.value+\'Header\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div> -->\n' +
    '                                       \n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                            <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-model="aboutUsObj.titleDictionary[lang.key]" ng-minlength="2" ng-maxlength="80">\n' +
    '                                            <div ng-messages="newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                                    <!-- <div ng-show="newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                                    <div ng-show="newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$error.required && !newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                    <div ng-show="newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newAboutUsForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError80\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        \n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name">{{\'SubTitle\' | translate}}</label>\n' +
    '                                                <input required type="text" class="mat-input form-control" name="subTitleDictionary{{lang.value+\'SubTitle\'}}" ng-model="aboutUsObj.subTitleDictionary[lang.key]" ng-minlength="2" ng-maxlength="16">\n' +
    '                                                <div ng-messages="newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$error" class="error">\n' +
    '                                                        <!-- <div ng-show="newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                                        <div ng-show="newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$error.required && !newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                        <div ng-show="newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$error.minlength || newAboutUsForm.subTitleDictionary{{lang.value+\'SubTitle\'}}.$error.maxlength">{{\'NameLengthError16\' | translate}}</div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '    \n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'TitleColored\' | translate}}</label>\n' +
    '                                            <input required type="text" class="mat-input form-control" name="titleColoredDictionary{{lang.value+\'TitleColored\'}}" ng-model="aboutUsObj.titleColoredDictionary[lang.key]" ng-minlength="2" ng-maxlength="16">\n' +
    '                                            <div ng-messages="newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$error" class="error">\n' +
    '                                                    <!-- <div ng-show="newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                                    <div ng-show="newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$error.required && !newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                    <div ng-show="newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$error.minlength || newAboutUsForm.titleColoredDictionary{{lang.value+\'TitleColored\'}}.$error.maxlength">{{\'NameLengthError16\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'BoldArticle\' | translate}}</label>\n' +
    '                                            <input required type="text" class="mat-input form-control" name="boldArticleDictionary{{lang.value+\'BoldArticle\'}}" ng-model="aboutUsObj.boldArticleDictionary[lang.key]" ng-minlength="2" ng-maxlength="120">\n' +
    '                                            <div ng-messages="newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$error" class="error">\n' +
    '                                                    <!-- <div ng-show="newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                                    <div ng-show="newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$error.required && !newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                    <div ng-show="newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$error.minlength || newAboutUsForm.boldArticleDictionary{{lang.value+\'BoldArticle\'}}.$error.maxlength">{{\'NameLengthError120\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '        \n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'Description\' | translate}}</label>\n' +
    '                                            <textarea required type="text" class="mat-input form-control" name="discriptionDictionary{{lang.value+\'Discription\'}}" ng-model="aboutUsObj.descriptionDictionary[lang.key]" ng-minlength="3" ng-maxlength="700">\n' +
    '                                            </textarea>\n' +
    '                                            <div ng-messages="newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error" class="error">\n' +
    '                                                <!-- <div ng-show="newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                                <div ng-show="newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.required && !newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                <div ng-show="newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.minlength || newAboutUsForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.maxlength">{{\'NameLengthError700\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        \n' +
    '\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div> \n' +
    '        \n' +
    '                    <hr>\n' +
    '        \n' +
    '                    <label for="first-name">{{\'Template\' | translate}}</label>\n' +
    '                    <div class="constrained">\n' +
    '                        <div ng-repeat="template in templateList.results">\n' +
    '                            <label>\n' +
    '                                <input required type="radio" ng-model="template.templateId" ng-change="changeId(template.templateId)"  ng-checked="template.templateId == aboutUsObj.templateId"  value="{{template.templateId}}" name="template"/>\n' +
    '                                <img ng-src="{{template.templateURL}}" style="height: 200px;width: 150px;"/>\n' +
    '                                <div ng-messages="newAboutUsForm.template.$error" class="error">\n' +
    '                                    <div ng-show="newAboutUsForm.template.$error.required && !newAboutUsForm.template.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                </div>\n' +
    '                            </label>\n' +
    '                        </div>\n' +
    '                        <div style="text-align:center;" paging page="1" page-size="10" total="templateList.totalCount" paging-action="addAboutUsCtrl.changePage(page)"\n' +
    '                            flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    \n' +
    '                </form>\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="newAboutUsForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="UpdateAboutUs()">{{\'Edit\' | translate}}</button>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/contactUs/templates/addContactUs.html',
    '<div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <button class="close" type="button" ng-click="addContactUsCtrl.close()">×</button>\n' +
    '            <h2 class="pmd-card-title-text">{{\'AddContactUsLbl\' | translate}}</h2>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="modal-body">\n' +
    '            <form class="form-horizontal" name="newContactUsForm">\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label>{{\'Email\' | translate}}</label>\n' +
    '                    <input type="text" class="mat-input form-control" name="email" ng-model="Email" ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '                    <span class="error" ng-show="newContactUsForm.email.$error.pattern">{{\'WrongMail\' | translate}}   </span>\n' +
    '                    <div ng-messages="newContactUsForm.email.$error" class="error">\n' +
    '                        <div ng-if="newContactUsForm.email.$error.required && !newContactUsForm.email.$pristine">{{\'EmailRequiredError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label>{{\'OwnerEmail\' | translate}}</label>\n' +
    '                    <input type="text" class="mat-input form-control" name="ownerEmail" ng-model="OwnerEmail" ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '                    <span class="error" ng-show="newContactUsForm.ownerEmail.$error.pattern">{{\'WrongMail\' | translate}}   </span>\n' +
    '                    <div ng-messages="newContactUsForm.ownerEmail.$error" class="error">\n' +
    '                        <div ng-if="newContactUsForm.ownerEmail.$error.required && !newContactUsForm.ownerEmail.$pristine">{{\'EmailRequiredError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'MobileNumberLbl\' | translate}}</label>\n' +
    '                    <input type="text" class="mat-input form-control" name="mobileNumber" numbers-only ng-model="MobileNum" ng-minlength="10" ng-maxlength="50">\n' +
    '                    <div ng-messages="newContactUsForm.mobileNumber.$error" class="error">\n' +
    '                        <div ng-if="newContactUsForm.mobileNumber.$error.required && !newContactUsForm.mobileNumber.$pristine">{{\'MobileNumberReqError\' | translate}}</div>\n' +
    '                        <div ng-if="(newContactUsForm.mobileNumber.$error.minlength || newContactUsForm.mobileNumber.$error.maxlength)">{{\'MonileNumberLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'WhatsAppNumberLbl\' | translate}}</label>\n' +
    '                    <input type="text" class="mat-input form-control" name="whatsappNumber" numbers-only ng-model="WhatsAppNum" ng-minlength="10" ng-maxlength="50">\n' +
    '                    <div ng-messages="newContactUsForm.whatsappNumber.$error" class="error">\n' +
    '                        <div ng-if="newContactUsForm.whatsappNumber.$error.required && !newContactUsForm.whatsappNumber.$pristine">{{\'MobileNumberReqError\' | translate}}</div>\n' +
    '                        <div ng-if="(newContactUsForm.whatsappNumber.$error.minlength || newContactUsForm.whatsappNumber.$error.maxlength)">{{\'MonileNumberLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Location\' | translate}}</label>\n' +
    '                    <input type="text" class="mat-input form-control" name="location" ng-model="Location">\n' +
    '                    <!-- <div ng-messages="newContactUsForm.location.$error" class="error">\n' +
    '                            <div ng-show="newContactUsForm.location.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                            <div ng-if="newContactUsForm.location.$error.required && !newContactUsForm.location.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                            <div ng-if="(newContactUsForm.location.$error.minlength || newContactUsForm.location.$error.maxlength) && !newContactUsForm.location.$error.required">{{\'NameLengthError\' | translate}}</div>\n' +
    '                    </div> -->\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'FacebookLink\' | translate}}</label>\n' +
    '                    <input ng-pattern="/^(http:\\/\\/|https:\\/\\/)?[_a-z0-9]+(\\.[_a-z0-9]+)*[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,7})$/" type="text" class="mat-input form-control" name="facebookLink" ng-model="FacebookLink">\n' +
    '                    <div ng-messages="newContactUsForm.facebookLink.$error" class="error">\n' +
    '                        <div ng-show="newContactUsForm.facebookLink.$error.pattern">{{\'LinkOnly\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'GmailLink\' | translate}}</label>\n' +
    '                    <input ng-pattern="/^(http:\\/\\/|https:\\/\\/)?[_a-z0-9]+(\\.[_a-z0-9]+)*[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,7})$/" type="text" class="mat-input form-control" name="gmailLink" ng-model="GmailLink">\n' +
    '                    <div ng-messages="newContactUsForm.facebookLink.$error" class="error">\n' +
    '                        <div ng-show="newContactUsForm.facebookLink.$error.pattern">{{\'LinkOnly\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'TwitterLink\' | translate}}</label>\n' +
    '                    <input ng-pattern="/^(http:\\/\\/|https:\\/\\/)?[_a-z0-9]+(\\.[_a-z0-9]+)*[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,7})$/" type="text" class="mat-input form-control" name="twitterLink" ng-model="TwitterLink">\n' +
    '                    <div ng-messages="newContactUsForm.facebookLink.$error" class="error">\n' +
    '                        <div ng-show="newContactUsForm.facebookLink.$error.pattern">{{\'LinkOnly\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Sections\' | translate}}</label>\n' +
    '                    <br/>\n' +
    '                    <label>\n' +
    '                        <input type="checkbox" ng-model="ShowEmail">\n' +
    '                        {{\'ShowEmail\' | translate}}\n' +
    '                    </label>\n' +
    '                    <br/>\n' +
    '                    <label>\n' +
    '                        <input type="checkbox" ng-model="ShowMobile">\n' +
    '                        {{\'ShowMobile\' | translate}}\n' +
    '                    </label>\n' +
    '                    <br/>\n' +
    '                    <label>\n' +
    '                        <input type="checkbox" ng-model="ShowOwnerEmail">\n' +
    '                        {{\'ShowOwnerEmail\' | translate}}\n' +
    '                    </label>\n' +
    '                    <br/>\n' +
    '                    <label>\n' +
    '                        <input type="checkbox" ng-model="ShowWhatsApp">\n' +
    '                        {{\'ShowWhatsApp\' | translate}}\n' +
    '                    </label>\n' +
    '                    <label>\n' +
    '                        <input type="checkbox" ng-model="ShowFacebook">\n' +
    '                        {{\'ShowFacebook\' | translate}}\n' +
    '                    </label> <label>\n' +
    '                        <input type="checkbox" ng-model="ShowGmail">\n' +
    '                        {{\'ShowGmail\' | translate}}\n' +
    '                    </label> <label>\n' +
    '                        <input type="checkbox" ng-model="ShowTwitter">\n' +
    '                        {{\'ShowTwitter\' | translate}}\n' +
    '                    </label>\n' +
    '                    <br/>\n' +
    '                </div>\n' +
    '\n' +
    '\n' +
    '            </form>\n' +
    '    \n' +
    '            <div class="pmd-modal-action text-right">\n' +
    '                <button ng-disabled="newContactUsForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewContactUs()">{{\'SaveAndExitBtn\' | translate}}</button>\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '    </div>\n' +
    '        \n' +
    '        ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/contactUs/templates/contactUs.html',
    '\n' +
    '<div>\n' +
    '        <div style="margin-bottom:10px">\n' +
    '            <button ng-show="flag == undefined" ng-click="contactUsCtrl.AddContactUs()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div ng-show="flag == undefined">\n' +
    '            <span>{{\'NoContactUsAvailable\' | translate}}</span>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-show="flag != undefined">\n' +
    '    \n' +
    '            <div class="table-responsive">\n' +
    '                <table class="table pmd-table table-hover">\n' +
    '                    <thead>\n' +
    '                        <tr>\n' +
    '                            <th>{{\'Email\' | translate}}</th>\n' +
    '                            <th>{{\'Number\' | translate}}</th>\n' +
    '                            <th>{{\'WhatsAppNumberLbl\' | translate}}</th>\n' +
    '                            <th>{{\'OwnerEmail\' | translate}}</th>\n' +
    '                            <!-- <th>{{\'Location\' | translate}}</th>\n' +
    '                            <th>{{\'ShowEmail\' | translate}}</th>\n' +
    '                            <th>{{\'ShowMobile\' | translate}}</th>\n' +
    '                            <th>{{\'ShowOwnerEmail\' | translate}}</th>\n' +
    '                            <th>{{\'ShowWhatsApp\' | translate}}</th>\n' +
    '                            <th>{{\'FacebookLink\' | translate}}</th>\n' +
    '                            <th>{{\'GmailLink\' | translate}}</th>\n' +
    '                            <th>{{\'TwitterLink\' | translate}}</th> -->\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.email}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.companyNumber}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.whatsAppNumber}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.ownerEmail}}</td>\n' +
    '                        <!-- <td  data-title="Name" width="20%">{{contactUsObj.location}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.showEmail}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.showMobile}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.showOwnerEmail}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.showWhatsApp}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.facebookLink}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.gmailLink}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{contactUsObj.twitterLink}}</td> -->\n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" width="15%">\n' +
    '                            <i class="cursorPointer" ng-click="contactUsCtrl.UpdateContactUs(contactUsObj)">{{\'Edit\' | translate}} </i>\n' +
    '                        </td>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/contactUs/templates/editContactUs.html',
    '<div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <button class="close" type="button" ng-click="editContactUsCtrl.close()">×</button>\n' +
    '            <h2 class="pmd-card-title-text">{{\'UpdateContactUsLbl\' | translate}}</h2>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="modal-body">\n' +
    '            <form class="form-horizontal" name="newContactUsForm" autocomplete="off">\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label>{{\'Email\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="email" ng-model="editContactUsCtrl.contactUsObj.email" ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '                    <span class="error" ng-show="newContactUsForm.email.$error.pattern">{{\'WrongMail\' | translate}}   </span>\n' +
    '                    <div ng-messages="newContactUsForm.email.$error" class="error">\n' +
    '                        <div ng-if="newContactUsForm.email.$error.required && !newContactUsForm.email.$pristine">{{\'EmailRequiredError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label>{{\'OwnerEmail\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="ownerEmail" ng-model="editContactUsCtrl.contactUsObj.ownerEmail" ng-pattern="/^\\w+([-+.\']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$/">\n' +
    '                    <span class="error" ng-show="newContactUsForm.ownerEmail.$error.pattern">{{\'WrongMail\' | translate}}   </span>\n' +
    '                    <div ng-messages="newContactUsForm.ownerEmail.$error" class="error">\n' +
    '                        <div ng-if="newContactUsForm.ownerEmail.$error.required && !newContactUsForm.ownerEmail.$pristine">{{\'EmailRequiredError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'MobileNumberLbl\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="mobileNumber" numbers-only ng-model="editContactUsCtrl.contactUsObj.companyNumber" ng-minlength="10" ng-maxlength="50">\n' +
    '                    <div ng-messages="newContactUsForm.mobileNumber.$error" class="error">\n' +
    '                        <div ng-if="newContactUsForm.mobileNumber.$error.required && !newContactUsForm.mobileNumber.$pristine">{{\'MobileNumberReqError\' | translate}}</div>\n' +
    '                        <div ng-if="(newContactUsForm.mobileNumber.$error.minlength || newContactUsForm.mobileNumber.$error.maxlength)">{{\'MonileNumberLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'WhatsAppNumberLbl\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="whatsappNumber" numbers-only ng-model="editContactUsCtrl.contactUsObj.whatsAppNumber" ng-minlength="10" ng-maxlength="50">\n' +
    '                    <div ng-messages="newContactUsForm.whatsappNumber.$error" class="error">\n' +
    '                        <div ng-if="newContactUsForm.whatsappNumber.$error.required && !newContactUsForm.whatsappNumber.$pristine">{{\'MobileNumberReqError\' | translate}}</div>\n' +
    '                        <div ng-if="(newContactUsForm.whatsappNumber.$error.minlength || newContactUsForm.whatsappNumber.$error.maxlength)">{{\'MonileNumberLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <!-- <label for="first-name">{{\'Location\' | translate}}</label>                     -->\n' +
    '                    <label for="first-name">{{\'Location\' | translate}}</label> <label ng-mouseover="view = true" ng-init="view = false" style="color: red">?</label>\n' +
    '                    <p style="color: blue; font-size: 10px" ng-bind-html="LocationDetails" ng-show="view == true"></p>\n' +
    '                    <input required type="text" class="mat-input form-control" name="location" ng-model="editContactUsCtrl.contactUsObj.location" ng-minlength="3" ng-maxlength="500">\n' +
    '                    <div ng-messages="newContactUsForm.location.$error" class="error">\n' +
    '                            <div ng-show="newContactUsForm.location.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                            <div ng-if="newContactUsForm.location.$error.required && !newContactUsForm.location.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                            <div ng-if="(newContactUsForm.location.$error.minlength || newContactUsForm.location.$error.maxlength) && !newContactUsForm.location.$error.required">{{\'NameLengthError500\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'FacebookLink\' | translate}}</label>\n' +
    '                    <input ng-pattern="/^(http:\\/\\/|https:\\/\\/)?[_a-z0-9]+(\\.[_a-z0-9]+)*[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,7})$/" type="text" class="mat-input form-control" name="facebookLink" ng-model="editContactUsCtrl.contactUsObj.facebookLink">\n' +
    '                    <div ng-messages="newContactUsForm.facebookLink.$error" class="error">\n' +
    '                        <div ng-show="newContactUsForm.facebookLink.$error.pattern">{{\'LinkOnly\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'GmailLink\' | translate}}</label>\n' +
    '                    <input ng-pattern="/^(http:\\/\\/|https:\\/\\/)?[_a-z0-9]+(\\.[_a-z0-9]+)*[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,7})$/" type="text" class="mat-input form-control" name="gmailLink" ng-model="editContactUsCtrl.contactUsObj.gmailLink">\n' +
    '                    <div ng-messages="newContactUsForm.gmailLink.$error" class="error">\n' +
    '                        <div ng-show="newContactUsForm.gmailLink.$error.pattern">{{\'LinkOnly\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                    <label for="first-name">{{\'TwitterLink\' | translate}}</label>\n' +
    '                    <input ng-pattern="/^(http:\\/\\/|https:\\/\\/)?[_a-z0-9]+(\\.[_a-z0-9]+)*[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,7})$/" type="text" class="mat-input form-control" name="twitterLink" ng-model="editContactUsCtrl.contactUsObj.twitterLink">\n' +
    '                    <div ng-messages="newContactUsForm.twitterLink.$error" class="error">\n' +
    '                        <div ng-show="newContactUsForm.twitterLink.$error.pattern">{{\'LinkOnly\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '\n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" ng-model="editContactUsCtrl.contactUsObj.showEmail" ng-checked="editContactUsCtrl.contactUsObj.showEmail">\n' +
    '                            {{\'ShowEmail\' | translate}}\n' +
    '                        </label>\n' +
    '                        <br/>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" ng-model="editContactUsCtrl.contactUsObj.showMobile" ng-checked="editContactUsCtrl.contactUsObj.showMobile">\n' +
    '                            {{\'ShowMobile\' | translate}}\n' +
    '                        </label>\n' +
    '                        <br/>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" ng-model="editContactUsCtrl.contactUsObj.showOwnerEmail" ng-checked="editContactUsCtrl.contactUsObj.showOwnerEmail">\n' +
    '                            {{\'ShowOwnerEmail\' | translate}}\n' +
    '                        </label>\n' +
    '                        <br/>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" ng-model="editContactUsCtrl.contactUsObj.showWhatsApp" ng-checked="editContactUsCtrl.contactUsObj.showWhatsApp">\n' +
    '                            {{\'ShowWhatsApp\' | translate}}\n' +
    '                        </label>\n' +
    '                        <br/> \n' +
    '                        <label>\n' +
    '                            <input type="checkbox" ng-model="editContactUsCtrl.contactUsObj.showFacebook">\n' +
    '                            {{\'ShowFacebook\' | translate}}\n' +
    '                        </label>\n' +
    '                        <br/>\n' +
    '                        <label>\n' +
    '                            <input type="checkbox" ng-model="editContactUsCtrl.contactUsObj.showGmail">\n' +
    '                            {{\'ShowGmail\' | translate}}\n' +
    '                        </label>\n' +
    '                        <br/>\n' +
    '                         <label>\n' +
    '                            <input type="checkbox" ng-model="editContactUsCtrl.contactUsObj.showTwitter">\n' +
    '                            {{\'ShowTwitter\' | translate}}\n' +
    '                        </label>\n' +
    '                        <br/>\n' +
    '                    </div>\n' +
    '            </form>\n' +
    '            \n' +
    '            <div class="pmd-modal-action text-right">\n' +
    '                <button ng-disabled="newContactUsForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="UpdateContactUs()">{{\'Edit\' | translate}}</button>\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '    </div>\n' +
    '    \n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/currency/templates/addCurrency.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <button class="close" type="button" ng-click="addCurrencyCtrl.close()">×</button>\n' +
    '        <h2 class="pmd-card-title-text">{{\'AddCurrencyLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newCurrencyForm">\n' +
    '            <div> \n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                    <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                    <input type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="addCurrencyCtrl.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                    <div ng-messages="newCurrencyForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                            <div ng-show="newCurrencyForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                            <!-- <div ng-if="newCurrencyForm.title.$error.required && !newCurrencyForm.title.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '                                            <div ng-show="newCurrencyForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newCurrencyForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="newCurrencyForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewCurrency()">{{\'SaveAndExitBtn\' | translate}}</button>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '    \n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/currency/templates/currency.html',
    '\n' +
    '<div>\n' +
    '        <div style="margin-bottom:10px">\n' +
    '            <button ng-click="currencyCtrl.AddCurrency()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div ng-if="currencyList.results.length == 0">\n' +
    '            <span>{{\'NoCurrencyAvailable\' | translate}}</span>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if=" currencyList.results.length >0">\n' +
    '    \n' +
    '            <div class="table-responsive">\n' +
    '                <table class="table pmd-table table-hover">\n' +
    '                    <thead>\n' +
    '                        <tr>\n' +
    '                            <th>{{\'Currency\' | translate}}</th>\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody>\n' +
    '                        <tr ng-repeat="currency in currencyList.results">\n' +
    '                            <td  data-title="Name" width="20%">{{currency.titleDictionary[selectedLanguage]}}</td>\n' +
    '                            <td ng-class="{\'red-text\': user.isActive == false }" width="15%">\n' +
    '                                <i class="cursorPointer" ng-click="currencyCtrl.UpdateCurrency(currency)">{{\'Edit\' | translate}} </i>\n' +
    '                                <i class="cursorPointer" ng-click="currencyCtrl.DeleteCurrency(currency.currencyId)">{{\'deleteBtn\' | translate}} </i>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="currencyList.totalCount" paging-action="currencyCtrl.changePage(page)"\n' +
    '             flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/currency/templates/editCurrency.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <button class="close" type="button" ng-click="editCurrencyCtrl.close()">×</button>\n' +
    '        <h2 class="pmd-card-title-text">{{\'UpdateCurencyLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newCurrencyForm" autocomplete="off">\n' +
    '            <div> \n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                    <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                    <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                    <input type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="editCurrencyCtrl.currencyObj.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                    <div ng-messages="newCurrencyForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                            <div ng-show="newCurrencyForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                            <!-- <div ng-if="newCurrencyForm.title.$error.required && !newCurrencyForm.title.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '                                            <div ng-show="newCurrencyForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newCurrencyForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '        </form>\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="newCurrencyForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="UpdateContact()">{{\'Edit\' | translate}}</button>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/hotel/templates/addHotel.html',
    '<style>\n' +
    '        .constrained {\n' +
    '        margin: 10px;\n' +
    '        padding: 10px;\n' +
    '        height: 200px;\n' +
    '        overflow: auto;\n' +
    '        border: 1px solid lightgray;\n' +
    '        background-color: white\n' +
    '    }\n' +
    '    \n' +
    '    </style>\n' +
    '    \n' +
    '    <div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <button class="close" type="button" ng-click="addHotelCtrl.close()">×</button>\n' +
    '            <h2 class="pmd-card-title-text">{{\'AddHotelLbl\' | translate}}</h2>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="modal-body">\n' +
    '                \n' +
    '            <form class="form-horizontal" name="newHotelForm">\n' +
    '                <div> \n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="Hotel" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                        <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                        <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                        <input type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="addHotelCtrl.TitleDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                        <div ng-messages="newHotelForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                                <div ng-show="newHotelForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                <!-- <div ng-if="newHotelForm.title.$error.required && !newHotelForm.title.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '                                                <div ng-show="newHotelForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newHotelForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '    \n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                        <label for="first-name">{{\'Description\' | translate}}</label>\n' +
    '                                        <input type="text" class="mat-input form-control" name="discriptionDictionary{{lang.value+\'Discription\'}}" ng-pattern="/^(\\D)+$/" ng-model="addHotelCtrl.DescriptionDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                        <div ng-messages="newHotelForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error" class="error">\n' +
    '                                                <div ng-show="newHotelForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                <!-- <div ng-if="newHotelForm.discription.$error.required && !newHotelForm.discription.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '                                                <div ng-show="newHotelForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.minlength || newHotelForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div> \n' +
    '    \n' +
    '                <hr>\n' +
    '    \n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Price\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="price" numbers-only ng-model="Price" ng-minlength="1" ng-maxlength="10">\n' +
    '                    <div ng-messages="newHotelForm.price.$error" class="error">\n' +
    '                        <!-- <div ng-if="newHotelForm.price.$error.required && !newHotelForm.price.$pristine">{{\'MobileNumberReqError\' | translate}}</div> -->\n' +
    '                        <div ng-if="(newHotelForm.price.$error.minlength || newHotelForm.price.$error.maxlength)">{{\'PriceLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '    \n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Rate\' | translate}}</label>\n' +
    '                    <select class="form-control" ng-model="Rate" style="width: 50%">\n' +
    '                        <option ng-selected="selected" value="1">1</option>\n' +
    '                        <option value="2">2</option>\n' +
    '                        <option value="3">3</option>\n' +
    '                        <option value="4">4</option>\n' +
    '                        <option value="5">5</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                \n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Currency\' | translate}}</label>\n' +
    '                    <select class="form-control" style="width:50% !important" ng-model="Currency" \n' +
    '                        ng-options="currency as currency.titleDictionary[selectedLanguage] for currency in currencyList">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '              \n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'IsMain\' | translate}}</label>\n' +
    '                    <select class="form-control" ng-model="IsMain" style="width: 50%">\n' +
    '                            <option value="1">{{\'Yes\' | translate}}</option>\n' +
    '                            <option value="0">{{\'No\' | translate}}</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '    \n' +
    '                <label for="first-name">{{\'Template\' | translate}}</label>\n' +
    '                <div class="constrained">\n' +
    '                    <div ng-repeat="template in templateList.results">\n' +
    '                        <label>\n' +
    '                            <input type="radio" ng-model="template.templateId" ng-change="changeId(template.templateId)"  value="{{template.templateId}}" name="template"/>\n' +
    '                            <img ng-src="{{template.templateURL}}" style="height: 200px;width: 150px;"/>\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                    <div style="text-align:center;" paging page="1" page-size="10" total="templateList.totalCount" paging-action="addHotelCtrl.changePage(page)"\n' +
    '                        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                \n' +
    '            </form>\n' +
    '    \n' +
    '           \n' +
    '            \n' +
    '    \n' +
    '            <div class="pmd-modal-action text-right">\n' +
    '                <button ng-disabled="newHotelForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewHotel()">{{\'SaveAndExitBtn\' | translate}}</button>\n' +
    '                <!-- <button ng-disabled="newHotelForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewContactMore()">{{\'AddMoreBtn\' | translate}}</button> -->\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '    </div>    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/hotel/templates/editHotel.html',
    '<div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <button class="close" type="button" ng-click="updateHotelCtrl.close()">×</button>\n' +
    '            <h2 class="pmd-card-title-text">{{\'UpdateHotelLbl\' | translate}}</h2>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="modal-body">\n' +
    '                <form class="form-horizontal" name="newHotelForm">\n' +
    '                        <div> \n' +
    '                            <ul class="nav nav-tabs" role="tablist">\n' +
    '                                <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                                    <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="offer" role="tab" data-toggle="tab">\n' +
    '                                        {{lang.value | translate}}\n' +
    '                                    </a>\n' +
    '                                </li> \n' +
    '                            </ul>\n' +
    '                            <div class="pmd-card">\n' +
    '                                <div class="pmd-card-body">\n' +
    '                                    <!-- Tab panes -->\n' +
    '                                    <div class="tab-content">\n' +
    '                                        <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                                <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                                <input type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="offerObj.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                                <div ng-messages="newHotelForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                                        <div ng-show="newHotelForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                        <!-- <div ng-if="newHotelForm.title.$error.required && !newHotelForm.title.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '                                                        <div ng-show="newHotelForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newHotelForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '            \n' +
    '                                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name">{{\'Description\' | translate}}</label>\n' +
    '                                                <input type="text" class="mat-input form-control" name="discriptionDictionary{{lang.value+\'Discription\'}}" ng-pattern="/^(\\D)+$/" ng-model="offerObj.descriptionDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                                <div ng-messages="newHotelForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error" class="error">\n' +
    '                                                        <div ng-show="newHotelForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                        <!-- <div ng-if="newHotelForm.discription.$error.required && !newHotelForm.discription.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '                                                        <div ng-show="newHotelForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.minlength || newHotelForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div> \n' +
    '            \n' +
    '                        <hr>\n' +
    '            \n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'Price\' | translate}}</label>\n' +
    '                            <input required type="text" class="mat-input form-control" name="price" numbers-only ng-model="offerObj.price" ng-minlength="1" ng-maxlength="10">\n' +
    '                            <div ng-messages="newHotelForm.price.$error" class="error">\n' +
    '                                <!-- <div ng-if="newHotelForm.price.$error.required && !newHotelForm.price.$pristine">{{\'MobileNumberReqError\' | translate}}</div> -->\n' +
    '                                <div ng-if="(newHotelForm.price.$error.minlength || newHotelForm.price.$error.maxlength)">{{\'PriceLengthError\' | translate}}</div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '            \n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'Rate\' | translate}}</label>\n' +
    '                            <select class="form-control" ng-model="offerObj.rate" style="width: 50%">\n' +
    '                                <option value="1">1</option>\n' +
    '                                <option value="2">2</option>\n' +
    '                                <option value="3">3</option>\n' +
    '                                <option value="4">4</option>\n' +
    '                                <option value="5">5</option>\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '                        \n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'Currency\' | translate}}</label>\n' +
    '                            <select class="form-control" style="width:50% !important" ng-model="offerObj.currencyTypeId" \n' +
    '                                ng-options="currency as currency.titleDictionary[selectedLanguage] for currency in currencyList" >\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '                      \n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'IsMain\' | translate}}</label>\n' +
    '                            <select class="form-control" ng-model="offerObj.isMain" style="width: 50%">\n' +
    '                                    <option value="1">{{\'Yes\' | translate}}</option>\n' +
    '                                    <option value="0">{{\'No\' | translate}}</option>\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '            \n' +
    '                        <label for="first-name">{{\'Template\' | translate}}</label>\n' +
    '                        <div class="constrained">\n' +
    '                            <div ng-repeat="template in templateList.results">\n' +
    '                                <label>\n' +
    '                                    <input type="radio" ng-model="template.templateId" ng-change="changeId(template.templateId)"  value="{{template.templateId}}" name="template"/>\n' +
    '                                    <img ng-src="{{template.templateURL}}" style="height: 200px;width: 150px;"/>\n' +
    '                                </label>\n' +
    '                            </div>\n' +
    '                            <div style="text-align:center;" paging page="1" page-size="10" total="templateList.totalCount" paging-action="addHotelCtrl.changePage(page)"\n' +
    '                                flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        \n' +
    '                    </form>\n' +
    '            <div class="pmd-modal-action text-right">\n' +
    '                <button ng-disabled="newHotelForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="UpdateHotel()">{{\'Edit\' | translate}}</button>\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '    </div>\n' +
    '    \n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/hotel/templates/hotel.html',
    '\n' +
    '<div>\n' +
    '        <div style="margin-bottom:10px">\n' +
    '            <button ng-click="hotelCtrl.AddHotel()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div ng-if="hotelList.results.length == 0">\n' +
    '            <span>{{\'NoHotelAvailable\' | translate}}</span>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if=" hotelList.results.length >0">\n' +
    '                <!-- {{hotelList.results}} -->\n' +
    '            <div class="table-responsive">\n' +
    '                <table class="table pmd-table table-hover">\n' +
    '                    <thead>\n' +
    '                        <tr>\n' +
    '                            <th>{{\'Title\' | translate}}</th>\n' +
    '                            <th>{{\'Description\' | translate}}</th>\n' +
    '                            <th>{{\'Rate\' | translate}}</th>\n' +
    '                            <th>{{\'Price\' | translate}}</th>\n' +
    '                            <th>{{\'Currency\' | translate}}</th>\n' +
    '                            <th>{{\'Template\' | translate}}</th>\n' +
    '                            <th>{{\'IsMain\' | translate}}</th>\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody>\n' +
    '                        <tr ng-repeat="hotel in hotelList.results">\n' +
    '                            <td  data-title="Name" width="20%">{{hotel.titleDictionary[selectedLanguage]}}</td>\n' +
    '                            <td  data-title="Name" width="20%">{{hotel.descriptionDictionary[selectedLanguage]}}</td>\n' +
    '                            <td  data-title="Name" width="20%">{{hotel.rate}}</td>\n' +
    '                            <td  data-title="Name" width="20%">{{hotel.price}}</td>\n' +
    '                            <td  data-title="Name" width="20%">{{(currencyList | filter : {currencyId:hotel.currencyTypeId})[0].titleDictionary[selectedLanguage]}}\n' +
    '                            </td>\n' +
    '                            <!-- <td  data-title="Name" width="20%">{{hotel.templateId}}</td> -->\n' +
    '                       \n' +
    '                               <td data-title="Image">\n' +
    '                                   <img ng-src="{{(templateList | filter : {templateId:hotel.templateId})[0].templateURL}}" alt="{{(templateList | filter : {templateId:hotel.templateId})[0].templateName}}" style="max-height: 200px;max-width: 200px;"/>\n' +
    '                                </td>\n' +
    '                            \n' +
    '                            <td  data-title="Name" width="20%" ng-if="hotel.isMain == true">{{\'Yes\' | translate}}</td>\n' +
    '                            <td  data-title="Name" width="20%" ng-if="hotel.isMain == false || hotel.isMain == null">{{\'No\' | translate}}</td>\n' +
    '                            <td ng-class="{\'red-text\': user.isActive == false }" width="15%">\n' +
    '                                <i class="cursorPointer" ng-click="hotelCtrl.UpdateHotel(hotel)">{{\'Edit\' | translate}} </i>\n' +
    '                                <i class="cursorPointer" ng-click="hotelCtrl.DeleteTemplate(hotel.hotelId)">{{\'deleteBtn\' | translate}} </i>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="hotelList.totalCount" paging-action="hotelCtrl.changePage(page)"\n' +
    '             flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/home/templates/addHome.html',
    '<style>\n' +
    '    .constrained {\n' +
    '    margin: 10px;\n' +
    '    padding: 10px;\n' +
    '    height: 200px;\n' +
    '    overflow: auto;\n' +
    '    border: 1px solid lightgray;\n' +
    '    background-color: white\n' +
    '}\n' +
    '\n' +
    '</style>\n' +
    '\n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <button class="close" type="button" ng-click="addHomeCtrl.close()">×</button>\n' +
    '        <h2 class="pmd-card-title-text">{{\'AddHomeLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '            \n' +
    '        <form class="form-horizontal" name="newHomeForm">\n' +
    '            <div> \n' +
    '                <ul class="nav nav-tabs" role="tablist">\n' +
    '                    <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                        <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                            {{lang.value | translate}}\n' +
    '                        </a>\n' +
    '                    </li> \n' +
    '                </ul>\n' +
    '                <div class="pmd-card">\n' +
    '                    <div class="pmd-card-body">\n' +
    '                        <!-- Tab panes -->\n' +
    '                        <div class="tab-content">\n' +
    '                            <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ \'TitleColored\' | translate}} </label>\n' +
    '                                    <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                    <input required type="text" class="mat-input form-control" name="coloredTitleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="addHomeCtrl.ColoredTitleDictionary[lang.key]" ng-minlength="2" ng-maxlength="7">\n' +
    '                                    <div ng-messages="newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                            <div ng-show="newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                            <div ng-show="newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$error.required && !newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$error.minlength || newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError7\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                    <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                    <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="addHomeCtrl.TitleDictionary[lang.key]" ng-minlength="2" ng-maxlength="10">\n' +
    '                                    <div ng-messages="newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                            <div ng-show="newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                            <div ng-show="newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$error.required && !newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError10\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name"> {{ \'SubTitle\' | translate}} </label>\n' +
    '                                    <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                    <input required type="text" class="mat-input form-control" name="subTitleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="addHomeCtrl.SubTitleDictionary[lang.key]" ng-minlength="2" ng-maxlength="15">\n' +
    '                                    <div ng-messages="newHomeForm.subTitleDictionarysubTitleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                            <div ng-show="newHomeForm.subTitleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                            <div ng-show="newHomeForm.subTitleDictionary{{lang.value+\'Title\'}}.$error.required && !newHomeForm.subTitleDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="newHomeForm.subTitleDictionary{{lang.value+\'Title\'}}.$error.minlength || newHomeForm.subTitleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError15\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '\n' +
    '                                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                    <label for="first-name">{{\'Description\' | translate}}</label>\n' +
    '                                    <textarea required type="text" class="mat-input form-control" name="discriptionDictionary{{lang.value+\'Discription\'}}" ng-model="addHomeCtrl.DescriptionDictionary[lang.key]" ng-minlength="100" ng-maxlength="800">\n' +
    '                                    </textarea>\n' +
    '                                    <div ng-messages="newHomeForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error" class="error">\n' +
    '                                        <!-- <div ng-show="newHomeForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                        <div ng-show="newHomeForm.discriptionDictionary{{lang.value+\'Title\'}}.$error.required && !newHomeForm.discriptionDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                        <div ng-show="newHomeForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.minlength || newHomeForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.maxlength">{{\'NameLengthError100800\' | translate}}</div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div> \n' +
    '\n' +
    '            <hr>\n' +
    '\n' +
    '            <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name">{{\'Price\' | translate}}</label>\n' +
    '                <input required type="text" class="mat-input form-control" name="price" numbers-only ng-model="Price" ng-minlength="1" ng-maxlength="10">\n' +
    '                <div ng-messages="newHomeForm.price.$error" class="error">\n' +
    '                    <div ng-if="(newHomeForm.price.$error.minlength || newHomeForm.price.$error.maxlength)">{{\'PriceLengthError\' | translate}}</div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name">{{\'Rate\' | translate}}</label>\n' +
    '                <select class="form-control" ng-model="Rate" style="width: 50%">\n' +
    '                    <option ng-selected="selected" value="1">1</option>\n' +
    '                    <option value="2">2</option>\n' +
    '                    <option value="3">3</option>\n' +
    '                    <option value="4">4</option>\n' +
    '                    <option value="5">5</option>\n' +
    '                </select>\n' +
    '            </div>\n' +
    '            \n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name">{{\'Currency\' | translate}}</label>\n' +
    '                <select class="form-control" style="width:50% !important" ng-model="Currency" \n' +
    '                    ng-options="currency as currency.titleDictionary[selectedLanguage] for currency in currencyList">\n' +
    '                </select>\n' +
    '            </div>\n' +
    '          \n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                <label for="first-name">{{\'IsMain\' | translate}}</label>\n' +
    '                <select class="form-control" ng-model="IsMain" style="width: 50%">\n' +
    '                        <option value="1">{{\'Yes\' | translate}}</option>\n' +
    '                        <option value="0">{{\'No\' | translate}}</option>\n' +
    '                </select>\n' +
    '            </div> -->\n' +
    '\n' +
    '            <label for="first-name">{{\'Template\' | translate}}</label>\n' +
    '            <div class="constrained">\n' +
    '                <div ng-repeat="template in templateList.results">\n' +
    '                    <label>\n' +
    '                        <input type="radio" ng-model="template.templateId" ng-change="changeId(template.templateId)"  value="{{template.templateId}}" name="template"/>\n' +
    '                        <img ng-src="{{template.templateURL}}" style="height: 100px;width: 100px;"/>\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '                <div style="text-align:center;" paging page="1" page-size="10" total="templateList.totalCount" paging-action="addHomeCtrl.changePage(page)"\n' +
    '                    flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                </div>\n' +
    '            </div>\n' +
    '            \n' +
    '        </form>\n' +
    '\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="newHomeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewHome()">{{\'SaveAndExitBtn\' | translate}}</button>\n' +
    '            <!-- <button ng-disabled="newHomeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewContactMore()">{{\'AddMoreBtn\' | translate}}</button> -->\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/home/templates/editHome.html',
    '<style>\n' +
    '.constrained {\n' +
    '    margin: 10px;\n' +
    '    padding: 10px;\n' +
    '    height: 200px;\n' +
    '    overflow: auto;\n' +
    '    border: 1px solid lightgray;\n' +
    '    background-color: white\n' +
    '}\n' +
    '\n' +
    '</style>\n' +
    '    \n' +
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <button class="close" type="button" ng-click="updateHomeCtrl.close()">×</button>\n' +
    '        <h2 class="pmd-card-title-text">{{\'UpdateHomeLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="modal-body">\n' +
    '            <form class="form-horizontal" name="newHomeForm">\n' +
    '                    <div> \n' +
    '                        <ul class="nav nav-tabs" role="tablist">\n' +
    '                            <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                                <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="home" role="tab" data-toggle="tab">\n' +
    '                                    {{lang.value | translate}}\n' +
    '                                </a>\n' +
    '                            </li> \n' +
    '                        </ul>\n' +
    '                        <div class="pmd-card">\n' +
    '                            <div class="pmd-card-body">\n' +
    '                                <!-- Tab panes -->\n' +
    '                                <div class="tab-content">\n' +
    '                                    <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name"> {{ \'TitleColored\' | translate}} </label>\n' +
    '                                            <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                            <input required type="text" class="mat-input form-control" name="coloredTitleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="homeObj.coloredTitleDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                            <div ng-messages="newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                                    <div ng-show="newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                    <div ng-show="newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$error.required && !newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                    <div ng-show="newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$error.minlength || newHomeForm.coloredTitleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError7\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                            <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                            <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="homeObj.titleDictionary[lang.key]" ng-minlength="2" ng-maxlength="10">\n' +
    '                                            <div ng-messages="newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                                    <div ng-show="newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                    <div ng-show="newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$error.required && !newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                    <div ng-show="newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newHomeForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError10\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        \n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name"> {{ \'SubTitle\' | translate}} </label>\n' +
    '                                            <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                            <input required type="text" class="mat-input form-control" name="subTitleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="homeObj.subTitleDictionary[lang.key]" ng-minlength="2" ng-maxlength="15">\n' +
    '                                            <div ng-messages="newHomeForm.subTitleDictionarysubTitleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                                    <div ng-show="newHomeForm.subTitleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                    <div ng-show="newHomeForm.subTitleDictionary{{lang.value+\'Title\'}}.$error.required && !newHomeForm.subTitleDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                    <div ng-show="newHomeForm.subTitleDictionary{{lang.value+\'Title\'}}.$error.minlength || newHomeForm.subTitleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError15\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '\n' +
    '                                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                            <label for="first-name">{{\'Description\' | translate}}</label>\n' +
    '                                            <textarea required type="text" class="mat-input form-control" name="discriptionDictionary{{lang.value+\'Discription\'}}" ng-model="homeObj.descriptionDictionary[lang.key]" ng-minlength="100" ng-maxlength="800">\n' +
    '                                            </textarea>\n' +
    '                                            <div ng-messages="newHomeForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error" class="error">\n' +
    '                                                <!-- <div ng-show="newHomeForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                                <div ng-show="newHomeForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.required && !newHomeForm.discriptionDictionary{{lang.value+\'Discription\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                <div ng-show="newHomeForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.minlength || newHomeForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.maxlength">{{\'NameLengthError100800\' | translate}}</div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div> \n' +
    '        \n' +
    '                    <hr>\n' +
    '        \n' +
    '                    <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Price\' | translate}}</label>\n' +
    '                        <input required type="text" class="mat-input form-control" name="price" numbers-only ng-model="homeObj.price" ng-minlength="1" ng-maxlength="10">\n' +
    '                        <div ng-messages="newHomeForm.price.$error" class="error">\n' +
    '                            <div ng-if="(newHomeForm.price.$error.minlength || newHomeForm.price.$error.maxlength)">{{\'PriceLengthError\' | translate}}</div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '        \n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Rate\' | translate}}</label>\n' +
    '                        <select class="form-control" ng-model="homeObj.rate" style="width: 50%">\n' +
    '                            <option value="1">1</option>\n' +
    '                            <option value="2">2</option>\n' +
    '                            <option value="3">3</option>\n' +
    '                            <option value="4">4</option>\n' +
    '                            <option value="5">5</option>\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                    \n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'Currency\' | translate}}</label>\n' +
    '                        <select class="form-control" style="width:50% !important" ng-model="homeObj.currencyTypeId" \n' +
    '                            ng-options="currency as currency.titleDictionary[selectedLanguage] for currency in currencyList" >\n' +
    '                        </select>\n' +
    '                    </div>\n' +
    '                  \n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                        <label for="first-name">{{\'IsMain\' | translate}}</label>\n' +
    '                        <select class="form-control" ng-model="homeObj.isMain" style="width: 50%">\n' +
    '                                <option value="1">{{\'Yes\' | translate}}</option>\n' +
    '                                <option value="0">{{\'No\' | translate}}</option>\n' +
    '                        </select>\n' +
    '                    </div> -->\n' +
    '        \n' +
    '                    <label for="first-name">{{\'Template\' | translate}}</label>\n' +
    '                    <div class="constrained">\n' +
    '                        <div ng-repeat="template in templateList.results">\n' +
    '                            <label>\n' +
    '                                <input type="radio" ng-model="template.templateId" ng-change="changeId(template.templateId)" ng-checked="template.templateId == homeObj.templateId"   value="{{template.templateId}}" name="template"/>\n' +
    '                                <img ng-src="{{template.templateURL}}" style="height: 100px;width: 100px;"/>\n' +
    '                            </label>\n' +
    '                        </div>\n' +
    '                        <div style="text-align:center;" paging page="1" page-size="10" total="templateList.totalCount" paging-action="addHomeCtrl.changePage(page)"\n' +
    '                            flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    \n' +
    '                </form>\n' +
    '        <div class="pmd-modal-action text-right">\n' +
    '            <button ng-disabled="newHomeForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="UpdateHome()">{{\'Edit\' | translate}}</button>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/home/templates/home.html',
    '\n' +
    '<div>\n' +
    '    <div style="margin-bottom:10px">\n' +
    '        <button ng-show="flag == 0" ng-click="homeCtrl.AddHome()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="flag == 0">\n' +
    '        <span>{{\'NoHomeAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-show="flag != 0">\n' +
    '            <!-- {{homeList.results}} -->\n' +
    '        <div class="table-responsive">\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr>\n' +
    '                        <th>{{\'TitleColored\' | translate}}</th>\n' +
    '                        <th>{{\'Title\' | translate}}</th>\n' +
    '                        <th>{{\'SubTitle\' | translate}}</th>\n' +
    '                        <th>{{\'Description\' | translate}}</th>\n' +
    '                        <!-- <th>{{\'Rate\' | translate}}</th>\n' +
    '                        <th>{{\'Price\' | translate}}</th>\n' +
    '                        <th>{{\'Currency\' | translate}}</th> -->\n' +
    '                        <th>{{\'Template\' | translate}}</th>\n' +
    '                        <!-- <th>{{\'IsMain\' | translate}}</th> -->\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="home in homeList.results">\n' +
    '                        <td  data-title="Name" width="20%">{{home.titleDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{home.subTitleDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{home.coloredTitleDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{home.descriptionDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                        <!-- <td  data-title="Name" width="20%">{{home.rate}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{home.price}}</td>\n' +
    '                        <td  data-title="Name" width="20%">{{(currencyList | filter : {currencyId:home.currencyTypeId})[0].titleDictionary[selectedLanguage]}}\n' +
    '                        </td> -->\n' +
    '                        <!-- <td  data-title="Name" width="20%">{{home.templateId}}</td> -->\n' +
    '                   \n' +
    '                        <td data-title="Image">\n' +
    '                            <img ng-src="{{(templateList | filter : {templateId:home.templateId})[0].templateURL}}" alt="{{(templateList | filter : {templateId:home.templateId})[0].templateName}}" style="max-height: 200px;max-width: 200px;"/>\n' +
    '                        </td>\n' +
    '                        \n' +
    '                        <!-- <td  data-title="Name" width="20%" ng-if="home.isMain == true">{{\'Yes\' | translate}}</td>\n' +
    '                        <td  data-title="Name" width="20%" ng-if="home.isMain == false || home.isMain == null">{{\'No\' | translate}}</td> -->\n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" width="15%">\n' +
    '                            <i class="cursorPointer" ng-click="homeCtrl.UpdateHome(home)">{{\'Edit\' | translate}} </i>\n' +
    '                            <!-- <i class="cursorPointer" ng-click="homeCtrl.DeleteTemplate(home.homeId)">{{\'deleteBtn\' | translate}} </i> -->\n' +
    '                        </td>\n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div style="text-align:center;" paging page="1" page-size="10" total="homeList.totalCount" paging-action="homeCtrl.changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/offer/templates/addOffer.html',
    '<style>\n' +
    '        .constrained {\n' +
    '        margin: 10px;\n' +
    '        padding: 10px;\n' +
    '        height: 200px;\n' +
    '        overflow: auto;\n' +
    '        border: 1px solid lightgray;\n' +
    '        background-color: white\n' +
    '    }\n' +
    '    \n' +
    '    </style>\n' +
    '    \n' +
    '    <div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <button class="close" type="button" ng-click="addOfferCtrl.close()">×</button>\n' +
    '            <h2 class="pmd-card-title-text">{{\'AddOfferLbl\' | translate}}</h2>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="modal-body">\n' +
    '                \n' +
    '            <form class="form-horizontal" name="newOfferForm">\n' +
    '                <div> \n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="Offer" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                        <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                        <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                        <input type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="addOfferCtrl.TitleDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                        <div ng-messages="newOfferForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                                <div ng-show="newOfferForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                <!-- <div ng-if="newOfferForm.title.$error.required && !newOfferForm.title.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '                                                <div ng-show="newOfferForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newOfferForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '    \n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                        <label for="first-name">{{\'Description\' | translate}}</label>\n' +
    '                                        <input type="text" class="mat-input form-control" name="discriptionDictionary{{lang.value+\'Discription\'}}" ng-pattern="/^(\\D)+$/" ng-model="addOfferCtrl.DescriptionDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                        <div ng-messages="newOfferForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error" class="error">\n' +
    '                                                <div ng-show="newOfferForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                <!-- <div ng-if="newOfferForm.discription.$error.required && !newOfferForm.discription.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '                                                <div ng-show="newOfferForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.minlength || newOfferForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div> \n' +
    '    \n' +
    '                <hr>\n' +
    '    \n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Price\' | translate}}</label>\n' +
    '                    <input required type="text" class="mat-input form-control" name="price" numbers-only ng-model="Price" ng-minlength="1" ng-maxlength="10">\n' +
    '                    <div ng-messages="newOfferForm.price.$error" class="error">\n' +
    '                        <!-- <div ng-if="newOfferForm.price.$error.required && !newOfferForm.price.$pristine">{{\'MobileNumberReqError\' | translate}}</div> -->\n' +
    '                        <div ng-if="(newOfferForm.price.$error.minlength || newOfferForm.price.$error.maxlength)">{{\'PriceLengthError\' | translate}}</div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '    \n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Rate\' | translate}}</label>\n' +
    '                    <select class="form-control" ng-model="Rate" style="width: 50%">\n' +
    '                        <option ng-selected="selected" value="1">1</option>\n' +
    '                        <option value="2">2</option>\n' +
    '                        <option value="3">3</option>\n' +
    '                        <option value="4">4</option>\n' +
    '                        <option value="5">5</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                \n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'Currency\' | translate}}</label>\n' +
    '                    <select class="form-control" style="width:50% !important" ng-model="Currency" \n' +
    '                        ng-options="currency as currency.titleDictionary[selectedLanguage] for currency in currencyList">\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '              \n' +
    '                <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'IsMain\' | translate}}</label>\n' +
    '                    <select class="form-control" ng-model="IsMain" style="width: 50%">\n' +
    '                            <option value="1">{{\'Yes\' | translate}}</option>\n' +
    '                            <option value="0">{{\'No\' | translate}}</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '    \n' +
    '                <label for="first-name">{{\'Template\' | translate}}</label>\n' +
    '                <div class="constrained">\n' +
    '                    <div ng-repeat="template in templateList.results">\n' +
    '                        <label>\n' +
    '                            <input type="radio" ng-model="template.templateId" ng-change="changeId(template.templateId)"  value="{{template.templateId}}" name="template"/>\n' +
    '                            <img ng-src="{{template.templateURL}}" style="height: 200px;width: 150px;"/>\n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                    <div style="text-align:center;" paging page="1" page-size="10" total="templateList.totalCount" paging-action="addOfferCtrl.changePage(page)"\n' +
    '                        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                \n' +
    '            </form>\n' +
    '    \n' +
    '           \n' +
    '            \n' +
    '    \n' +
    '            <div class="pmd-modal-action text-right">\n' +
    '                <button ng-disabled="newOfferForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewOffer()">{{\'SaveAndExitBtn\' | translate}}</button>\n' +
    '                <!-- <button ng-disabled="newOfferForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewContactMore()">{{\'AddMoreBtn\' | translate}}</button> -->\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '    </div>    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/offer/templates/editOffer.html',
    '<div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <button class="close" type="button" ng-click="updateOfferCtrl.close()">×</button>\n' +
    '            <h2 class="pmd-card-title-text">{{\'UpdateOfferLbl\' | translate}}</h2>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="modal-body">\n' +
    '                <form class="form-horizontal" name="newOfferForm">\n' +
    '                        <div> \n' +
    '                            <ul class="nav nav-tabs" role="tablist">\n' +
    '                                <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                                    <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="offer" role="tab" data-toggle="tab">\n' +
    '                                        {{lang.value | translate}}\n' +
    '                                    </a>\n' +
    '                                </li> \n' +
    '                            </ul>\n' +
    '                            <div class="pmd-card">\n' +
    '                                <div class="pmd-card-body">\n' +
    '                                    <!-- Tab panes -->\n' +
    '                                    <div class="tab-content">\n' +
    '                                        <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                                <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                                <input type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="offerObj.titleDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                                <div ng-messages="newOfferForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                                        <div ng-show="newOfferForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                        <!-- <div ng-if="newOfferForm.title.$error.required && !newOfferForm.title.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '                                                        <div ng-show="newOfferForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newOfferForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '            \n' +
    '                                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name">{{\'Description\' | translate}}</label>\n' +
    '                                                <input type="text" class="mat-input form-control" name="discriptionDictionary{{lang.value+\'Discription\'}}" ng-pattern="/^(\\D)+$/" ng-model="offerObj.descriptionDictionary[lang.key]" ng-minlength="3" ng-maxlength="50">\n' +
    '                                                <div ng-messages="newOfferForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error" class="error">\n' +
    '                                                        <div ng-show="newOfferForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                        <!-- <div ng-if="newOfferForm.discription.$error.required && !newOfferForm.discription.$pristine">{{\'requiredErr\' | translate}}</div> -->\n' +
    '                                                        <div ng-show="newOfferForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.minlength || newOfferForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.maxlength">{{\'NameLengthError\' | translate}}</div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div> \n' +
    '            \n' +
    '                        <hr>\n' +
    '            \n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'Price\' | translate}}</label>\n' +
    '                            <input required type="text" class="mat-input form-control" name="price" numbers-only ng-model="offerObj.price" ng-minlength="1" ng-maxlength="10">\n' +
    '                            <div ng-messages="newOfferForm.price.$error" class="error">\n' +
    '                                <!-- <div ng-if="newOfferForm.price.$error.required && !newOfferForm.price.$pristine">{{\'MobileNumberReqError\' | translate}}</div> -->\n' +
    '                                <div ng-if="(newOfferForm.price.$error.minlength || newOfferForm.price.$error.maxlength)">{{\'PriceLengthError\' | translate}}</div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '            \n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'Rate\' | translate}}</label>\n' +
    '                            <select class="form-control" ng-model="offerObj.rate" style="width: 50%">\n' +
    '                                <option value="1">1</option>\n' +
    '                                <option value="2">2</option>\n' +
    '                                <option value="3">3</option>\n' +
    '                                <option value="4">4</option>\n' +
    '                                <option value="5">5</option>\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '                        \n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'Currency\' | translate}}</label>\n' +
    '                            <select class="form-control" style="width:50% !important" ng-model="offerObj.currencyTypeId" \n' +
    '                                ng-options="currency as currency.titleDictionary[selectedLanguage] for currency in currencyList" >\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '                      \n' +
    '                        <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'IsMain\' | translate}}</label>\n' +
    '                            <select class="form-control" ng-model="offerObj.isMain" style="width: 50%">\n' +
    '                                    <option value="1">{{\'Yes\' | translate}}</option>\n' +
    '                                    <option value="0">{{\'No\' | translate}}</option>\n' +
    '                            </select>\n' +
    '                        </div>\n' +
    '            \n' +
    '                        <label for="first-name">{{\'Template\' | translate}}</label>\n' +
    '                        <div class="constrained">\n' +
    '                            <div ng-repeat="template in templateList.results">\n' +
    '                                <label>\n' +
    '                                    <input type="radio" ng-model="template.templateId" ng-change="changeId(template.templateId)"  value="{{template.templateId}}" name="template"/>\n' +
    '                                    <img ng-src="{{template.templateURL}}" style="height: 200px;width: 150px;"/>\n' +
    '                                </label>\n' +
    '                            </div>\n' +
    '                            <div style="text-align:center;" paging page="1" page-size="10" total="templateList.totalCount" paging-action="addOfferCtrl.changePage(page)"\n' +
    '                                flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        \n' +
    '                    </form>\n' +
    '            <div class="pmd-modal-action text-right">\n' +
    '                <button ng-disabled="newOfferForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="UpdateOffer()">{{\'Edit\' | translate}}</button>\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '    </div>\n' +
    '    \n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/offer/templates/offer.html',
    '\n' +
    '<div>\n' +
    '        <div style="margin-bottom:10px">\n' +
    '            <button ng-click="offerCtrl.AddOffer()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div ng-if="offerList.results.length == 0">\n' +
    '            <span>{{\'NoOfferAvailable\' | translate}}</span>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if=" offerList.results.length >0">\n' +
    '                <!-- {{offerList.results}} -->\n' +
    '            <div class="table-responsive">\n' +
    '                <table class="table pmd-table table-hover">\n' +
    '                    <thead>\n' +
    '                        <tr>\n' +
    '                            <th>{{\'Title\' | translate}}</th>\n' +
    '                            <th>{{\'Description\' | translate}}</th>\n' +
    '                            <th>{{\'Rate\' | translate}}</th>\n' +
    '                            <th>{{\'Price\' | translate}}</th>\n' +
    '                            <th>{{\'Currency\' | translate}}</th>\n' +
    '                            <th>{{\'Template\' | translate}}</th>\n' +
    '                            <th>{{\'IsMain\' | translate}}</th>\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody>\n' +
    '                        <tr ng-repeat="offer in offerList.results">\n' +
    '                            <td  data-title="Name" width="20%">{{offer.titleDictionary[selectedLanguage]}}</td>\n' +
    '                            <td  data-title="Name" width="20%">{{offer.descriptionDictionary[selectedLanguage]}}</td>\n' +
    '                            <td  data-title="Name" width="20%">{{offer.rate}}</td>\n' +
    '                            <td  data-title="Name" width="20%">{{offer.price}}</td>\n' +
    '                            <td  data-title="Name" width="20%">{{(currencyList | filter : {currencyId:offer.currencyTypeId})[0].titleDictionary[selectedLanguage]}}\n' +
    '                            </td>\n' +
    '                            <!-- <td  data-title="Name" width="20%">{{offer.templateId}}</td> -->\n' +
    '                       \n' +
    '                               <td data-title="Image">\n' +
    '                                   <img ng-src="{{(templateList | filter : {templateId:offer.templateId})[0].templateURL}}" alt="{{(templateList | filter : {templateId:offer.templateId})[0].templateName}}" style="max-height: 200px;max-width: 200px;"/>\n' +
    '                                </td>\n' +
    '                            \n' +
    '                            <td  data-title="Name" width="20%" ng-if="offer.isMain == true">{{\'Yes\' | translate}}</td>\n' +
    '                            <td  data-title="Name" width="20%" ng-if="offer.isMain == false || offer.isMain == null">{{\'No\' | translate}}</td>\n' +
    '                            <td ng-class="{\'red-text\': user.isActive == false }" width="15%">\n' +
    '                                <i class="cursorPointer" ng-click="offerCtrl.UpdateOffer(offer)">{{\'Edit\' | translate}} </i>\n' +
    '                                <i class="cursorPointer" ng-click="offerCtrl.DeleteTemplate(offer.offerId)">{{\'deleteBtn\' | translate}} </i>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="offerList.totalCount" paging-action="offerCtrl.changePage(page)"\n' +
    '             flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/ourTeam/templates/addOurTeam.html',
    '<style>\n' +
    '    .constrained {\n' +
    '    margin: 10px;\n' +
    '    padding: 10px;\n' +
    '    height: 200px;\n' +
    '    overflow: auto;\n' +
    '    border: 1px solid lightgray;\n' +
    '    background-color: white\n' +
    '}\n' +
    '\n' +
    '</style>\n' +
    '    \n' +
    '    <div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <button class="close" type="button" ng-click="addOurTeamCtrl.close()">×</button>\n' +
    '            <h2 class="pmd-card-title-text">{{\'AddOurTeamLbl\' | translate}}</h2>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="modal-body">\n' +
    '                \n' +
    '            <form class="form-horizontal" name="newOurTeamForm">\n' +
    '                <div> \n' +
    '                    <ul class="nav nav-tabs" role="tablist">\n' +
    '                        <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                            <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="OurTeam" role="tab" data-toggle="tab">\n' +
    '                                {{lang.value | translate}}\n' +
    '                            </a>\n' +
    '                        </li> \n' +
    '                    </ul>\n' +
    '                    <div class="pmd-card">\n' +
    '                        <div class="pmd-card-body">\n' +
    '                            <!-- Tab panes -->\n' +
    '                            <div class="tab-content">\n' +
    '                                <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                        <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                        <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                        <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="addOurTeamCtrl.TitleDictionary[lang.key]" ng-minlength="2" ng-maxlength="50">\n' +
    '                                        <div ng-messages="newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                                <div ng-show="newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                <div ng-show="newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$error.required && !newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                <div ng-show="newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError50\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '    \n' +
    '                                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                                        <label for="first-name">{{\'Description\' | translate}}</label>\n' +
    '                                        <textarea required type="text" class="mat-input form-control" name="discriptionDictionary{{lang.value+\'Discription\'}}" ng-model="addOurTeamCtrl.DescriptionDictionary[lang.key]" ng-minlength="2" ng-maxlength="400">\n' +
    '                                        </textarea>\n' +
    '                                        <div ng-messages="newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error" class="error">\n' +
    '                                            <!-- <div ng-show="newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                            <div ng-show="newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.required && !newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                            <div ng-show="newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.minlength || newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.maxlength">{{\'NameLengthError400\' | translate}}</div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div> \n' +
    '    \n' +
    '                <hr>\n' +
    '\n' +
    '                <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                    <label for="first-name">{{\'IsMain\' | translate}}</label>\n' +
    '                    <select class="form-control" ng-model="IsMain" style="width: 50%">\n' +
    '                            <option value="1">{{\'Yes\' | translate}}</option>\n' +
    '                            <option value="0">{{\'No\' | translate}}</option>\n' +
    '                    </select>\n' +
    '                </div> -->\n' +
    '    \n' +
    '                <label for="first-name">{{\'Template\' | translate}}</label>\n' +
    '                <div class="constrained">\n' +
    '                    <div ng-init="firstTempId = templateList.results[0].templateId" ng-repeat="template in templateList.results">\n' +
    '                        <label>\n' +
    '                            <input ng-checked="template.templateId == firstTempId" type="radio" ng-model="template.templateId" ng-change="changeId(template.templateId)"  value="{{template.templateId}}" name="template"/>\n' +
    '                            <img ng-src="{{template.templateURL}}" style="height: 200px;width: 150px;"/>\n' +
    '                            \n' +
    '                        </label>\n' +
    '                    </div>\n' +
    '                    <div style="text-align:center;" paging page="1" page-size="10" total="templateList.totalCount" paging-action="addOurTeamCtrl.changePage(page)"\n' +
    '                        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                \n' +
    '            </form>\n' +
    '    \n' +
    '           \n' +
    '            \n' +
    '    \n' +
    '            <div class="pmd-modal-action text-right">\n' +
    '                <button ng-disabled="newOurTeamForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewOurTeam()">{{\'SaveAndExitBtn\' | translate}}</button>\n' +
    '                <!-- <button ng-disabled="newOurTeamForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="AddNewContactMore()">{{\'AddMoreBtn\' | translate}}</button> -->\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '    </div>    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/ourTeam/templates/editOurTeam.html',
    '<style>\n' +
    '    .constrained {\n' +
    '    margin: 10px;\n' +
    '    padding: 10px;\n' +
    '    height: 200px;\n' +
    '    overflow: auto;\n' +
    '    border: 1px solid lightgray;\n' +
    '    background-color: white\n' +
    '}\n' +
    '\n' +
    '</style>\n' +
    '\n' +
    '<div class="modal-content">\n' +
    '        <div class="modal-header bordered">\n' +
    '            <button class="close" type="button" ng-click="updateOurTeamCtrl.close()">×</button>\n' +
    '            <h2 class="pmd-card-title-text">{{\'UpdateOurTeamLbl\' | translate}}</h2>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="modal-body">\n' +
    '                <form class="form-horizontal" name="newOurTeamForm">\n' +
    '                        <div> \n' +
    '                            <ul class="nav nav-tabs" role="tablist">\n' +
    '                                <li role="presentation" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language">\n' +
    '                                    <a href="javascript:void(0);" data-target="#{{lang.value}}-form" aria-controls="ourTeam" role="tab" data-toggle="tab">\n' +
    '                                        {{lang.value | translate}}\n' +
    '                                    </a>\n' +
    '                                </li> \n' +
    '                            </ul>\n' +
    '                            <div class="pmd-card">\n' +
    '                                <div class="pmd-card-body">\n' +
    '                                    <!-- Tab panes -->\n' +
    '                                    <div class="tab-content">\n' +
    '                                        <div role="tablist" class="tab-pane" ng-class="{\'active\':$index == 0}" ng-repeat="lang in language" id="{{lang.value}}-form">\n' +
    '                                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name"> {{ \'Title\' | translate}} </label>\n' +
    '                                                <!-- <label for="first-name">{{\'Title\' | translate}}</label> -->\n' +
    '                                                <input required type="text" class="mat-input form-control" name="titleDictionary{{lang.value+\'Title\'}}" ng-pattern="/^(\\D)+$/" ng-model="ourTeamObj.titleDictionary[lang.key]" ng-minlength="2" ng-maxlength="50">\n' +
    '                                                <div ng-messages="newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$error" class="error">\n' +
    '                                                    <div ng-show="newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div>\n' +
    '                                                    <div ng-show="newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$error.required && !newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                    <div ng-show="newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$error.minlength || newOurTeamForm.titleDictionary{{lang.value+\'Title\'}}.$error.maxlength">{{\'NameLengthError50\' | translate}}</div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '            \n' +
    '                                            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                                                <label for="first-name">{{\'Description\' | translate}}</label>\n' +
    '                                                <textarea required type="text" class="mat-input form-control" name="discriptionDictionary{{lang.value+\'Discription\'}}"  ng-model="ourTeamObj.descriptionDictionary[lang.key]" ng-minlength="2" ng-maxlength="400">\n' +
    '                                                </textarea>\n' +
    '                                                    <div ng-messages="newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error" class="error">\n' +
    '                                                    <!-- <div ng-show="newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.pattern">{{\'TextOnly\' | translate}}</div> -->\n' +
    '                                                    <div ng-show="newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.required && !newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$pristine">{{\'requiredErr\' | translate}}</div>\n' +
    '                                                    <div ng-show="newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.minlength || newOurTeamForm.discriptionDictionary{{lang.value+\'Discription\'}}.$error.maxlength">{{\'NameLengthError400\' | translate}}</div>\n' +
    '                                                </div>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </div> \n' +
    '            \n' +
    '                        <hr>\n' +
    '            \n' +
    '                        <!-- <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed">\n' +
    '                            <label for="first-name">{{\'IsMain\' | translate}}</label>\n' +
    '                            <select class="form-control" ng-model="ourTeamObj.isMain" style="width: 50%">\n' +
    '                                    <option value="1">{{\'Yes\' | translate}}</option>\n' +
    '                                    <option value="0">{{\'No\' | translate}}</option>\n' +
    '                            </select>\n' +
    '                        </div> -->\n' +
    '            \n' +
    '                        <label for="first-name">{{\'Template\' | translate}}</label>\n' +
    '                        <div class="constrained">\n' +
    '                            <div ng-repeat="template in templateList.results">\n' +
    '                                <label>\n' +
    '                                    <input type="radio" ng-model="template.templateId" ng-change="changeId(template.templateId)" ng-checked="template.templateId == ourTeamObj.templateId"  value="{{template.templateId}}" name="template"/>\n' +
    '                                    <img ng-src="{{template.templateURL}}" style="height: 200px;width: 150px;"/>\n' +
    '                                </label>\n' +
    '                            </div>\n' +
    '                            <div style="text-align:center;" paging page="1" page-size="10" total="templateList.totalCount" paging-action="addOurTeamCtrl.changePage(page)"\n' +
    '                                flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                        \n' +
    '                    </form>\n' +
    '            <div class="pmd-modal-action text-right">\n' +
    '                <button ng-disabled="newOurTeamForm.$invalid" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="UpdateOurTeam()">{{\'Edit\' | translate}}</button>\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '    </div>\n' +
    '    \n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/ourTeam/templates/ourTeam.html',
    '\n' +
    '<div>\n' +
    '        <div style="margin-bottom:10px">\n' +
    '            <button ng-click="ourTeamCtrl.AddOurTeam()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div ng-if="ourTeamList.results.length == 0">\n' +
    '            <span>{{\'NoOurTeamAvailable\' | translate}}</span>\n' +
    '        </div>\n' +
    '    \n' +
    '        <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if=" ourTeamList.results.length >0">\n' +
    '                <!-- {{ourTeamList.results}} -->\n' +
    '            <div class="table-responsive">\n' +
    '                <table class="table pmd-table table-hover">\n' +
    '                    <thead>\n' +
    '                        <tr>\n' +
    '                            <th>{{\'Title\' | translate}}</th>\n' +
    '                            <th>{{\'Description\' | translate}}</th>\n' +
    '                            <th>{{\'Template\' | translate}}</th>\n' +
    '                            <!-- <th>{{\'IsMain\' | translate}}</th> -->\n' +
    '                        </tr>\n' +
    '                    </thead>\n' +
    '                    <tbody>\n' +
    '                        <tr ng-repeat="ourTeam in ourTeamList.results">\n' +
    '                            <td  data-title="Name" width="20%">{{ourTeam.titleDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                            <td  data-title="Name" width="20%">{{ourTeam.descriptionDictionary[selectedLanguage] | limitTo: 10 }}</td>\n' +
    '                               <td data-title="Image">\n' +
    '                                   <img ng-src="{{(templateList | filter : {templateId:ourTeam.templateId})[0].templateURL}}" alt="{{(templateList | filter : {templateId:ourTeam.templateId})[0].templateName}}" style="max-height: 200px;max-width: 200px;"/>\n' +
    '                                </td>\n' +
    '                            \n' +
    '                            <!-- <td  data-title="Name" width="20%" ng-if="ourTeam.isMain == true">{{\'Yes\' | translate}}</td>\n' +
    '                            <td  data-title="Name" width="20%" ng-if="ourTeam.isMain == false || ourTeam.isMain == null">{{\'No\' | translate}}</td> -->\n' +
    '                            <td ng-class="{\'red-text\': user.isActive == false }" width="15%">\n' +
    '                                <i class="cursorPointer" ng-click="ourTeamCtrl.UpdateOurTeam(ourTeam)">{{\'Edit\' | translate}} </i>\n' +
    '                                <i class="cursorPointer" ng-click="ourTeamCtrl.DeleteTemplate(ourTeam.ourTeamId)">{{\'deleteBtn\' | translate}} </i>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </tbody>\n' +
    '                </table>\n' +
    '            </div>\n' +
    '    \n' +
    '        </div>\n' +
    '        <div style="text-align:center;" paging page="1" page-size="10" total="ourTeamList.totalCount" paging-action="ourTeamCtrl.changePage(page)"\n' +
    '             flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/template/templates/addTemplate.html',
    '<div class="modal-content">\n' +
    '    <div class="modal-header bordered">\n' +
    '        <button class="close" type="button" ng-click="addTemplateCtrl.close()">×</button>\n' +
    '        <h2 class="pmd-card-title-text">{{\'NewTemplateLbl\' | translate}}</h2>\n' +
    '    </div>\n' +
    '    <div class="modal-body">\n' +
    '        <form class="form-horizontal" name="newTemplateForm">\n' +
    '       \n' +
    '            <div class="form-group pmd-textfield pmd-textfield-floating-label pmd-textfield-floating-label-completed" >       \n' +
    '                    <input id="templateImage" name="templateImage" style="display: none;" onchange="angular.element(this).scope().AddTemplateImage(this.files)" type="file" required>\n' +
    '                    <button ng-click="addTemplateCtrl.LoadUploadImage()" >{{\'UploadImageBtn\' | translate}}</button>\n' +
    '                    <img ng-src="{{addTemplateCtrl.templateImage}}" style="max-height: 200px;max-width: 200px;">\n' +
    '                    <!-- <span > <i class="material-icons md-dark pmd-md warrningIcon">warning</i> {{\'RecommendedTemplateImage\' | translate}}</span> -->\n' +
    '                      <div ng-messages="newTemplateForm.templateImage.$error" >\n' +
    '                        <div ng-if="newTemplateForm.templateImage.$error.required">{{\'requiredErr\' | translate}}</div>\n' +
    '                    </div>\n' +
    '            </div>\n' +
    '        </form>\n' +
    '    </div>\n' +
    '    <div class="pmd-modal-action text-right">\n' +
    '        <button ng-disabled="newTemplateForm.$invalid  || addTemplateCtrl.templateImage== null" class="btn pmd-ripple-effect btn-primary" type="button" ng-click="addTemplateCtrl.AddTemplate()">{{\'saveChangesBtn\' | translate}}</button>\n' +
    '        <button class="btn pmd-ripple-effect btn-default" type="button" ng-click="addTemplateCtrl.close()">{{\'DiscardBtn\' | translate}}</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '    \n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/GlobalAdmin/template/templates/template.html',
    '<div >\n' +
    '       \n' +
    '    <div style="margin-bottom:10px">\n' +
    '            <button  ng-click="templateCtrl.AddTemplate()" class="btn pmd-ripple-effect btn-primary pmd-z-depth" type="button">{{\'AddBtn\' | translate}}</button>\n' +
    '    </div> \n' +
    '    \n' +
    '    <div ng-if="templateCtrl.Templates.results.length == 0">\n' +
    '            <span>{{\'NoTemplateAvailable\' | translate}}</span>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="pmd-card pmd-z-depth pmd-card-custom-view" ng-if="templateCtrl.Templates.results.length > 0">\n' +
    '        <div class="table-responsive">\n' +
    '            <table class="table pmd-table table-hover">\n' +
    '                <thead>\n' +
    '                    <tr> \n' +
    '                        <th >{{\'Template\' | translate}}</th>\n' +
    '                    </tr>\n' +
    '                </thead>\n' +
    '                <tbody>\n' +
    '                    <tr ng-repeat="template in templateCtrl.Templates.results"> \n' +
    '                        <td data-title="Image" ><img ng-src="{{template.templateURL}}" ng-alt="{{template.templateName}}" style="max-height: 200px;max-width: 200px;"/></td>\n' +
    '                        <td ng-class="{\'red-text\': user.isActive == false }" width="15%">\n' +
    '                            <i ng-hide="template.templateId == 27" class="cursorPointer" ng-click="templateCtrl.DeleteTemplate(template.templateId)">{{\'deleteBtn\' | translate}} </i>\n' +
    '                        </td>\n' +
    '                        \n' +
    '                    </tr>\n' +
    '                </tbody>\n' +
    '            </table>\n' +
    '        </div>\n' +
    '        <!-- <div style="text-align:center;" paging page="1" page-size="10" total="templateCtrl.Templates.totalCount" paging-action="templateCtrl.changePage( page)"\n' +
    '        flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '            </div> -->\n' +
    '    </div> \n' +
    '    \n' +
    '    <div style="text-align:center;" paging page="1" page-size="10" total="templateCtrl.Templates.totalCount" paging-action="templateCtrl.changePage(page)"\n' +
    '         flex="nogrow" show-prev-next="true" show-first-last="true" hide-if-empty="true" disabled-class="hide">\n' +
    '    </div>\n' +
    '    \n' +
    '</div>					\n' +
    '    ');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/core/Delete/templates/ConfirmDeleteDialog.html',
    '<div class="modal-content">\n' +
    '	<div class="modal-body">{{\'deleteConfirmationLbl\' | translate}}<strong> {{deleteDlCtrl.itemName}}</strong> {{deleteDlCtrl.message}}? </div>\n' +
    '	<div class="pmd-modal-action text-right">\n' +
    '		<button class="btn pmd-ripple-effect btn-primary pmd-btn-flat" type="button" ng-click="deleteDlCtrl.Confirm()">{{\'deleteBtn\' | translate}}</button>\n' +
    '		<button class="btn pmd-ripple-effect btn-default pmd-btn-flat" type="button" ng-click="deleteDlCtrl.close()">{{\'cancelBtn\' | translate}}</button>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);

angular.module('home').run(['$templateCache', function($templateCache) {
  $templateCache.put('./app/core/login/templates/login.html',
    '<div class="logincard" ng-if="!isLoggedIn()">\n' +
    '  	<div class="pmd-card card-default pmd-z-depth">\n' +
    '		<div class="login-card">\n' +
    '			<form ng-submit="submit(username,password)" name="loginForm">	\n' +
    '				<div class="pmd-card-body">\n' +
    '					<div class="alert alert-success" role="alert"> Oh snap! Change a few things up and try submitting again. </div>\n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="inputError1" class="control-label pmd-input-group-label">Email</label>\n' +
    '                        <div class="input-group">\n' +
    '                            <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">perm_identity</i></div>\n' +
    '                            <input type="text" class="form-control" id="exampleInputAmount" required name="username" ng-model="username" ng-change="reset()">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                    \n' +
    '                    <div class="form-group pmd-textfield pmd-textfield-floating-label">\n' +
    '                        <label for="inputError1" class="control-label pmd-input-group-label">Password</label>\n' +
    '                        <div class="input-group">\n' +
    '                            <div class="input-group-addon"><i class="material-icons md-dark pmd-sm">lock_outline</i></div>\n' +
    '                            <input required type="password" name="password" ng-model="password" ng-change="reset()" minlength="6"  class="form-control" id="exampleInputAmount">\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div ng-if="invalidLoginInfo" class="loginFailed">\n' +
    '                    <span>Incorrect email or password.</span>\n' +
    '                </div>\n' +
    '                <div ng-if="inActiveUser" class="loginFailed">\n' +
    '                    <span>Your account is deleted.</span>\n' +
    '                </div>\n' +
    '				<div class="pmd-card-footer card-footer-no-border card-footer-p16 text-center">\n' +
    '					<button  type="submit" class="btn pmd-ripple-effect btn-primary btn-block">Login</button>\n' +
    '				</div>\n' +
    '			</form>\n' +
    '		</div>\n' +
    '		\n' +
    '		\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);

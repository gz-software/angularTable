/**
 * @author Pango Leung/Lion Yang
 * @class  DataTable
 * 这个文件主要是初始化angularJs 以及
 * 实现读取数据 实现排序 模糊查询等等功能
 */
(function(){
    'use strict';
	// 用到的外部接口定义
    var main = angular.module('main', ['ngRoute', 'ngTable', 'ngSocial', 'embedCodepen', 'ngSanitize','pascalprecht.translate']);
	
	main.config(
	/**
	 *@event function($translateProvider) 配置/加载本地资源文件
	*/
	function($translateProvider){
		$translateProvider.useStaticFilesLoader({
			files: [{
			  prefix: './i18n/locale-',
			  suffix: '.json'
			 }]
		});
		/**
		 *@event 语言注册
		*/
		$translateProvider.registerAvailableLanguageKeys(['en', 'zh'], {
		   'en_US': 'en',
		   'zh_CN': 'zh'
		}); 
		$translateProvider.determinePreferredLanguage('');
		$translateProvider.fallbackLanguage('en');
	});
	
	/**
	*@event 表格的controller
	*/
	main.controller('tableController', function(NgTableParams,$scope, $http,$translate){       
	
		//切换语言
		$scope.langSelect = "en"; // 默认值
		$translate.use($scope.langSelect);
		/**
		*@event 选择语言这个下拉框
		*/
		$scope.changeLang = function(langSelect){
			$translate.use(langSelect);
		};
		//切换样式
		$scope.cssSelect = "white"; // 默认值
		/**
		*@event 选择主题的下拉框
		*/
		$scope.changeCss = function(cssSelect){
			if(cssSelect=="black"){
				$("#inventoryTable").css({ color: "white", background: "black" });
			}
			
			if(cssSelect=="white"){
				$("#inventoryTable").css({ color: "black", background: "white" });
			}
		};

		// 设置分页信息，以及把数据放进去，没时间弄后台，写了个数据JS，在inventoryData.js里面定义数据包
		$scope.tableParams = new NgTableParams({ count: 15}, { counts: [15, 25, 100], dataset: inventoryData});
	});

      
    
})();

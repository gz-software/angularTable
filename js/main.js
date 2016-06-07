/**
 * @author Pango Leung/Lion Yang
 * @class  DataTable
 * ����ļ���Ҫ�ǳ�ʼ��angularJs �Լ�
 * ʵ�ֶ�ȡ���� ʵ������ ģ����ѯ�ȵȹ���
 */
(function(){
    'use strict';
	// �õ����ⲿ�ӿڶ���
    var main = angular.module('main', ['ngRoute', 'ngTable', 'ngSocial', 'embedCodepen', 'ngSanitize','pascalprecht.translate']);
	
	main.config(
	/**
	 *@event function($translateProvider) ����/���ر�����Դ�ļ�
	*/
	function($translateProvider){
		$translateProvider.useStaticFilesLoader({
			files: [{
			  prefix: './i18n/locale-',
			  suffix: '.json'
			 }]
		});
		/**
		 *@event ����ע��
		*/
		$translateProvider.registerAvailableLanguageKeys(['en', 'zh'], {
		   'en_US': 'en',
		   'zh_CN': 'zh'
		}); 
		$translateProvider.determinePreferredLanguage('');
		$translateProvider.fallbackLanguage('en');
	});
	
	/**
	*@event ����controller
	*/
	main.controller('tableController', function(NgTableParams,$scope, $http,$translate){       
	
		//�л�����
		$scope.langSelect = "en"; // Ĭ��ֵ
		$translate.use($scope.langSelect);
		/**
		*@event ѡ���������������
		*/
		$scope.changeLang = function(langSelect){
			$translate.use(langSelect);
		};
		//�л���ʽ
		$scope.cssSelect = "white"; // Ĭ��ֵ
		/**
		*@event ѡ�������������
		*/
		$scope.changeCss = function(cssSelect){
			if(cssSelect=="black"){
				$("#inventoryTable").css({ color: "white", background: "black" });
			}
			
			if(cssSelect=="white"){
				$("#inventoryTable").css({ color: "black", background: "white" });
			}
		};

		// ���÷�ҳ��Ϣ���Լ������ݷŽ�ȥ��ûʱ��Ū��̨��д�˸�����JS����inventoryData.js���涨�����ݰ�
		$scope.tableParams = new NgTableParams({ count: 15}, { counts: [15, 25, 100], dataset: inventoryData});
	});

      
    
})();

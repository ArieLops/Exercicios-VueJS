let app = new Vue({
    el:'#app',
    data:{
       nome: 'Ariel'
    },
    
    /*
    beforeCreate:function() {
        alert(this.nome);
    },
    
    created:function() {
        alert(this.nome);
    },
    
    beforeMount:function() {
        alert(this.nome);
    },

    mounted:function() {
        alert(this.nome);
    },

    updated:function() {
        alert(this.nome);
    },

    */


});

/*
beforeCreate - Não tem acesso as informações ainda 
created - Elementos javascript já foram criados na memória mas ainda não foi renderizado na tela
beforeMount
mounted
beforeUpdate
updated
beforeDestroy
destroyed
*/
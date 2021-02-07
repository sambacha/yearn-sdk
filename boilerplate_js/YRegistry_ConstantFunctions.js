 /*
   *
   * Constant Functions
   *
   */

  getVault (index) {
    return this.YRegistry.methods.getVault(new BN(index, 10)).call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  getVaultInfo (_vault) {
    return this.YRegistry.methods.getVaultInfo(_vault).call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  getVaults () {
    return this.YRegistry.methods.getVaults().call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  getVaultsInfo () {
    return this.YRegistry.methods.getVaultsInfo().call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  getVaultsLength () {
    return this.YRegistry.methods.getVaultsLength().call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  governance () {
    return this.YRegistry.methods.governance().call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  isDelegatedVault () {
    return this.YRegistry.methods.isDelegatedVault().call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }
  pendingGovernance () {
    return this.YRegistry.methods.pendingGovernance().call()
    .then((resp) => {
      return resp
    }).catch((err) => {
      console.error(err)
    })
  }

 <template>
  <nav>
      <div class="nav-wrapper green">
        <div class="container">
          <md-tabs md-sync-route>
              <md-tab id="tab-square" md-label="Square" to="/BlueSquare"></md-tab>
              <md-tab id="tab-canvas" md-label="Canvas" to="/CanvasSquare"></md-tab>
              <md-tab id="tab-poll" md-label="Gender Poll" to="/"></md-tab>
        </md-tabs>
        </div>
      </div>
    </nav>
  </template>
  <style lang="scss" scoped>

nav {
    margin-bottom:10px;
  }
</style>